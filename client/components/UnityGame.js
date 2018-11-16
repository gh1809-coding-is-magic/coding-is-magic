import React from 'react'
import Unity, {UnityContent} from 'react-unity-webgl'
import Blockly from 'node-blockly/browser'
import BlocklyDrawer, {
  Block,
  Category,
  workspaceXML
} from 'react-blockly-drawer'

class UnityGame extends React.Component {
  constructor() {
    super()

    this.unityContent = new UnityContent(
      'Build/Build.json',
      'Build/UnityLoader.js',
      {adjustOnWindowResize: true}
    )

    this.helloWorld = {
      name: 'HelloWorld',
      category: 'Demo',
      block: {
        init: function() {
          this.jsonInit({
            message0: 'Goodbye %1',
            args0: [
              {
                type: 'field_input',
                name: 'TYPE',
                text: ' '
              }
            ],
            output: 'TYPE',
            colour: 160,
            tooltip: 'Says Hello'
          })
        }
      },
      generator: block => {
        const message = `'${block.getFieldValue('TYPE')}'` || "''"
        const code = `console.log('------------Hello ${message}')`
        return [code, Blockly.JavaScript.ORDER_NONE]
      }
    }
  }

  render() {
    return (
      <div id="unity-container">
        <div
          id="inner-unity"
          style={{
            top: 0,
            left: 0,
            width: '500px',
            height: '300px'
          }}
        >
          <Unity
            unityContent={this.unityContent}
            width="500px"
            height="500px"
          />
        </div>
        <BlocklyDrawer
          style={{
            top: 0,
            left: 0,
            width: '500px',
            height: '300px'
          }}
          workspaceXML={workspaceXML}
          tools={[this.helloWorld]}
          onChange={(code, workspace) => {
            console.log(code, workspace)
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
        <button type="button" onClick={() => this.helloWorld.generator(this.helloWorld.block)}>
            Run
        </button>
      </div>
    )
  }
}

export default UnityGame
