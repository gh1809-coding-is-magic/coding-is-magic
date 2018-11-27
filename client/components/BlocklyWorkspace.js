import React from 'react'
import Blockly from 'node-blockly/browser'
import BlocklyDrawer, {
  Block,
  Category,
  workspaceXML
} from 'react-blockly-drawer'
import {move1, forLoop, turn} from './spellConstructor'
import { runInThisContext } from 'vm';

let counter = 0;

class BlocklyWorkspace extends React.Component {
  constructor() {
    super()

    //State keeps track of outputted Unity messages and blocks in the workspace
    this.state = {
      currCode: '',
      currWorkspace: '',
      level: 0,
    }

    //Move block 1 step definition
    //*Should probably refactor this and place definition outside of constructor
    this.move = move1()
    this.forLoops = forLoop()
    this.turn = turn()

    this.runCode = this.runCode.bind(this)
    this.restartLevel = this.restartLevel.bind(this)
    // this.clearBoard = this.clearBoard.bind(this)
    this.next = this.next.bind(this)
  }

  //Evaluates code on submit and sends message to Unity
  runCode() {
    console.log('State of current code: ', this.state.currCode)
    console.log('Type: ', typeof this.state.currCode)
    //called in block function to delay each sendMessage
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    };
    eval('const runBlocklyCode = async () => {' + this.state.currCode + '}; runBlocklyCode();');
  }

  next() {
    console.log('this was clicked');
    this.setState({level: counter++});
  }

  restartLevel() {
    eval(this.props.unitySendMessage("Sheep_Demo", "RestartLevelOne"))
  }

  // clearBoard(){
  //   this.setState({
  //     currWorkspace: ''
  //   })
  // }

  //   clearBoard(){
  //     this.state.currWorkspace.clear();
  // }
  //False to prevent placed blocks from disappearing with each new state change

  // shouldComponentUpdate() {
  //   return false
  // }

  //Sets up Blockly workspace and updates state with each new block placement
  render() {
    const allLevels= [[this.move, this.turn], [this.move, this.turn, this.forLoops]];
    return (
      <div id="blockly-content">
        <script src="blockly_compressed.js" />
        <script src="javascript_compressed.js" />
        <div className="blockly-button-box">
          <button
            type="button"
            className='run-button'
            onClick={() => this.runCode()}
          >
            Run Code!
          </button>

          <button
          className="restart-button"
          type="button"
          onClick={() => this.restartLevel()}>
          Restart
          </button>

          <button
          className="clear-board"
          type="button"
          onClick={() => this.clearBoard()}>
          Clear Board
          </button>

          <button
            type="button"
            className='next-button'
            onClick={() => this.next()}
          >
            Next
          </button>

        </div>
      </div>
    )
  }
}

export default BlocklyWorkspace
