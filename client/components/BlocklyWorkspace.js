import React from 'react'
import Blockly from 'node-blockly/browser'
import BlocklyDrawer, {
  Block,
  Category,
  workspaceXML
} from 'react-blockly-drawer'
import {move1, forLoop, turn} from './spellConstructor'
import LevelOne from './LevelOne'
import LevelTwo from './LevelTwo'

class BlocklyWorkspace extends React.Component {
  constructor() {
    super()

    //State keeps track of outputted Unity messages and blocks in the workspace
    this.state = {
      currCode: '',
      currWorkspace: '',
      counter: 0
    }

    //Move block 1 step definition
    //*Should probably refactor this and place definition outside of constructor
    this.move = move1()
    this.forLoops = forLoop()
    this.turn = turn()

    this.runCode = this.runCode.bind(this)
    this.restartLevel = this.restartLevel.bind(this)
    // this.clearBoard = this.clearBoard.bind(this)
  }

  //Evaluates code on submit and sends message to Unity
  runCode() {
    console.log('State of current code: ', this.state.currCode)
    console.log('Type: ', typeof this.state.currCode)
    //called in block function to delay each sendMessage
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
    eval(
      'const runBlocklyCode = async () => {' +
        this.state.currCode +
        '}; runBlocklyCode();'
    )
  }

  restartLevel() {
    eval(this.props.unitySendMessage('Sheep_Demo', 'RestartLevelOne'))
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
    console.log('counter', this.state.counter)
    return (
      <div id="blockly-content">
        <script src="blockly_compressed.js" />
        <script src="javascript_compressed.js" />
        {this.state.counter === 0 ? (
          <LevelOne
            runCode={this.props.runCode}
            unitySendMessage={this.props.unitySendMessage}
          />
        ) : (
          <LevelTwo
            runCode={this.props.runCode}
            unitySendMessage={this.props.unitySendMessage}
          />
        )}
        <button
          type="button"
          className="next-button"
          onClick={() => this.setState({counter: this.state.counter + 1})}
        >
          Next
        </button>
      </div>
      // </div>
    )
  }
}

export default BlocklyWorkspace
