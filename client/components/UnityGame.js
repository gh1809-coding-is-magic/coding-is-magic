import React from 'react'
import Unity, {UnityContent} from 'react-unity-webgl'
import BlocklyWorkspace from './BlocklyWorkspace'

class UnityGame extends React.Component {
  constructor() {
    super()

    this.unityContent = new UnityContent(
      'Build/Build.json',
      'Build/UnityLoader.js',
      {adjustOnWindowResize: true}
    )

    this.unitySendMessage = this.unitySendMessage.bind(this)
  }

  unitySendMessage(unityObj, funcName, message) {
    this.unityContent.send(unityObj, funcName, message)
  }

  render() {
    return (
      <div>

      <div id="browser-container">
        <div
          id="inner-unity"
        >
          <Unity
            unityContent={this.unityContent}
          />
        </div>
        <div id="inner-blockly">
          <BlocklyWorkspace unitySendMessage={this.unitySendMessage} />
        </div>
      </div>
      </div>
    )
  }
}

export default UnityGame
