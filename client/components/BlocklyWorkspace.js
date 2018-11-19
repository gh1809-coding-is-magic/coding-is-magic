import React from 'react'
import Blockly from 'node-blockly/browser'
import BlocklyDrawer, {
  Block,
  Category,
  workspaceXML
} from 'react-blockly-drawer'

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
    this.helloWorld = {
      name: 'Move 1 Step',
      category: 'Movement',
      block: {
        init: function() {
          this.jsonInit({
            message0: 'Move 1 step',
            colour: 160,
            tooltip: 'Moves the object one step',
            previousStatement: null,
            nextStatement: null
          })
        }
      },
      generator: block => {
        const code = `console.log("Move1!!");`
        console.log('What is ORDER_NONE? ', Blockly.JavaScript.ORDER_NONE)
        return code
      }
    }

    this.runCode = this.runCode.bind(this)
  }

  //Evaluates code on submit and sends message to Unity
  runCode() {
    console.log('State of current code: ', this.state.currCode)
    console.log('Type: ', typeof this.state.currCode)
  }

  //False to prevent placed blocks from disappearing with each new state change
  shouldComponentUpdate() {
    return false
  }

  //Sets up Blockly workspace and updates state with each new block placement
  render() {
    return (
      <div id="blockly-content">
        <BlocklyDrawer
          tools={[this.helloWorld]}
          onChange={(code, workspace) => {
            console.log('CHANGING THE CODE: ', code)
            this.setState({currCode: code, currWorkspace: workspace})
          }}
          appearance={{
            categories: {
              Demo: {
                colour: '270'
              }
            }
          }}
        >
          <Category name="Variables" custom="VARIABLE" />
          <Category name="Values">
            <Block type="math_number" />
            <Block type="text" />
          </Category>
        </BlocklyDrawer>
        <button type="button" onClick={() => this.runCode()}>
          Run
        </button>
      </div>
    )
  }
}

export default BlocklyWorkspace
