import React from 'react'
import BlocklyDrawer, {
  Block,
  Category,
  workspaceXML
} from 'react-blockly-drawer'
import {move1, forLoop, turn} from './spellConstructor'

class LevelTwo extends React.Component {
  constructor() {
    super()

    //State keeps track of outputted Unity messages and blocks in the workspace
    this.state = {
      currCode: '',
      currWorkspace: ''
    }

    //Move block 1 step definition
    //*Should probably refactor this and place definition outside of constructor
    this.move = move1()
    this.forLoops = forLoop()
    this.turn = turn()

    this.runCode = this.runCode.bind(this)
    this.restartLevel = this.restartLevel.bind(this)
  }

  //Evaluates code on submit and sends message to Unity
  runCode() {
    console.log('State of current: ', this.state.currCode)
    if (
      this.state.currCode ===
      `for(let i=0;i<2; i++){  this.props.unitySendMessage("Sheep_Demo", "TurnNinety");}; for(let i=0;i<2; i++){  this.props.unitySendMessage("Sheep_Demo", "BlockyMove");};`
    ) {
      eval(`const runWin = () => {
        ${this.state.currCode}}; runWin();`)
    } else {
      eval(
        `const runBlocklyCode = () => {
      ${
        this.state.currCode
      } this.props.unitySendMessage('Sheep_Demo', 'Returning')}; runBlocklyCode();`
      )
    }
  }

  restartLevel() {
    eval(this.props.unitySendMessage('Sheep_Demo', 'RestartLevelOne'))
  }

  shouldComponentUpdate() {
    return false
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
              collapse: false,
              colour: '#ccc',
              snap: true
            },
            maxBlocks: 5,
            disable: true,
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

          {/* <button
            className="restart-button"
            type="button"
            onClick={() => this.restartLevel()}
          >
            Restart Level
          </button> */}

          {/* <button
            className="clear-board"
            type="button"
            onClick={() => this.clearBoard()}
          >
            Clear Board
          </button> */}
        </div>
      </div>
    )
  }
}

export default LevelTwo
