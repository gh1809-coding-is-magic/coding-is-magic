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
    this.clearBoard = this.clearBoard.bind(this)
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
    eval('const runBlocklyCode = async () => {' + this.state.currCode + '}; ();');
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

    clearBoard(){
      this.state.currWorkspace.clear();
  }
  //False to prevent placed blocks from disappearing with each new state change
  shouldComponentUpdate() {
    return false
  }

  //Sets up Blockly workspace and updates state with each new block placement
  render() {
    const allLevels= [[this.move, this.turn], [this.move, this.turn, this.forLoops]];
    return (
      <div id="blockly-content">
        <script src="blockly_compressed.js" />
        <script src="javascript_compressed.js" />
        <BlocklyDrawer
          className="blockly-drawer"
          tools={allLevels[this.state.level]}
          onChange={(code, workspace) => {
            console.log('CHANGING THE CODE: ', code)
            this.setState({currCode: code, currWorkspace: workspace})
          }}
          style={{minHeight: '75vh', width: '50vw'}}
          injectOptions={{
            horizontalLayout: 'false',
            zoom: {
              startScale: 2,
            },
            grid: {
              spacing: 20,
              length: 3,
              colour: '#ccc',
              snap: true
            },
            maxBlocks: 5,
            disable: true,
            scrollbars: false,
            toolboxPosition: 'start'
          }}
        >
          {/* <Category name="Variables" custom="VARIABLE"> */}
          {/* <Category name="Values"> */}
            {/* <Block type="math_number" /> */}
            {/* <Block type="text" /> */}
            {/* <Block type="controls_if" /> */}
            {/* <Block type="controls_whileUntil" /> */}
            {/* <Block type="controls_for" /> */}
          {/* </Category> */}
        </BlocklyDrawer>
        <div className="blockly-button-box">
          <button
            type="button"
            className='run-button'
            style={{

            }}
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
            onClick={this.next()}
          >
            Next
          </button>

        </div>
      </div>
    )
  }
}

export default BlocklyWorkspace
