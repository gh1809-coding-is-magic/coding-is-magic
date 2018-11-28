import React from 'react'
import BlocklyDrawer, {
  Block,
  Category,
  workspaceXML
} from 'react-blockly-drawer'
import {move1, forLoop, turn} from './spellConstructor'

class LevelOne extends React.Component {
  constructor() {
    super()

    //State keeps track of outputted Unity messages and blocks in the workspace
    this.state = {
      currCode: '',
      currWorkspace: '',
    }

    //Move block 1 step definition
    //*Should probably refactor this and place definition outside of constructor
    this.move = move1()
    this.forLoops = forLoop()
    this.turn = turn()

    this.runCode = this.runCode.bind(this)
    this.restartLevel = this.restartLevel.bind(this)
  }
  restartLevel() {
    this.props.unitySendMessage('Sheep_Demo', 'RestartLevelOne');
  }

  //Evaluates code on submit and sends message to Unity
  runCode() {
    // this.setState({currCode: this.state.currCode.concat(`this.props.unitySendMessage('Sheep_Demo', 'ReturnPosition')`)})
    console.log('State of current: ', this.state.currCode)
    //called in block function to delay each sendMessage
    eval(`${this.state.currCode};
    setTimeout(() => this.props.unitySendMessage('Sheep_Demo', 'ReturnPosition'), 0)`)
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <div>
        <BlocklyDrawer
          className="blockly-drawer"
          tools={[this.move, this.turn]}
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
            collapse: true,
            scrollbars: false,
            toolboxPosition: 'start'
          }}
        />

        <div className="blockly-button-box">
          <button
            type="button"
            className="run-button"
            onClick={() => this.runCode()}
          >
            Run Code!
          </button>

          <button
            className="restart-button"
            type="button"
            onClick={() => this.restartLevel()}
          >
            Restart
          </button>

          <button
            className="clear-board"
            type="button"
            onClick={() => this.clearBoard()}
          >
            Clear Board
          </button>
        </div>
      </div>
    )
  }
}

export default LevelOne
