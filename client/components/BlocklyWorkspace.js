import React from 'react'
import Blockly from 'node-blockly/browser'
import BlocklyDrawer, {
  Block,
  Category,
  workspaceXML
} from 'react-blockly-drawer'
import {move1, forLoop, turn} from './spellConstructor'

class BlocklyWorkspace extends React.Component {
  constructor() {
    super()

    //State keeps track of outputted Unity messages and blocks in the workspace
    this.state = {
      currCode: '',
      currWorkspace: ''
    }

    //Move block 1 step definition
    //*Should probably refactor this and place definition outside of constructor
    this.helloWorld = move1()
    this.forLoops = forLoop()
    this.turn = turn()

    this.runCode = this.runCode.bind(this)
    this.restartLevel = this.restartLevel.bind(this)
  }

  //Evaluates code on submit and sends message to Unity
  runCode() {
    console.log('State of current code: ', this.state.currCode)
    console.log('Type: ', typeof this.state.currCode)
    eval(this.state.currCode)
  }

  restartLevel() {
    eval(this.props.unitySendMessage("Sheep_Demo", "RestartLevelOne"))
  }

  //False to prevent placed blocks from disappearing with each new state change
  shouldComponentUpdate() {
    return false
  }

  //Sets up Blockly workspace and updates state with each new block placement
  render() {
    console.log('Move1: ', move1)
    console.log('Hello world: ', this.helloWorld)
    return (
      <div id="blockly-content">
        <BlocklyDrawer
          className="blockly-drawer"
          tools={[this.helloWorld, this.forLoops, this.turn]}
          onChange={(code, workspace) => {
            console.log('CHANGING THE CODE: ', code)
            this.setState({currCode: code, currWorkspace: workspace})
          }}
          style={{minHeight: '75vh', width: '50vw'}}
          injectOptions={{
            horizontalLayout: 'false',
            zoom: {
              controls: true,
              wheel: true,
              startScale: 1.0,
              maxScale: 3,
              minScale: 0.3,
              scaleSpeed: 1.2
            },
            grid: {
              spacing: 20,
              length: 3,
              colour: '#ccc',
              snap: true
            },
            scrollbars: false,
            toolboxPosition: 'start'
          }}
        >
          <Category name="Variables" custom="VARIABLE" />
          <Category name="Values">
            <Block type="math_number" />
            <Block type="text" />
            <Block type="controls_if" />
            <Block type="controls_whileUntil" />
            <Block type="controls_for" />
          </Category>
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
          <button type="button" onClick={() => this.restartLevel()}>
            Restart
          </button>

          <button
            type="button"
            className='next-button'
          >
            Next
          </button>
        </div>
      </div>
    )
  }
}

export default BlocklyWorkspace
