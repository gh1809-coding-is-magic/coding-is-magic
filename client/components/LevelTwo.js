import React from 'react'
import BlocklyDrawer, {
  Block,
  Category,
  workspaceXML
} from 'react-blockly-drawer'
import {move1, forLoop, turn} from './spellConstructor'

class LevelTwo extends React.Component {  constructor() {
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

  shouldComponentUpdate() {
      return false;
  }

  render() {
    return (
      <div>

        <BlocklyDrawer
          className="blockly-drawer"
          tools={[this.move, this.turn, this.forLoops]}
          onChange={(code, workspace) => {
            console.log('CHANGING THE CODE: ', code)
            this.setState({currCode: code, currWorkspace: workspace})
          }}
          style={{minHeight: '75vh', width: '50vw'}}
          injectOptions={{
            horizontalLayout: 'false',
            zoom: {
              startScale: 2
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
        />
      </div>
    )
  }
}

export default LevelTwo
