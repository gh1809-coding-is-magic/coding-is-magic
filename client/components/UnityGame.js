import React from 'react'
import Unity, {UnityContent} from 'react-unity-webgl'
import BlocklyWorkspace from './BlocklyWorkspace'
import Main from './Main'

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
        <Main />
        <div id="mobile-message">
          Not mobile or tablet compatible. Please view on a desktop!
        </div>
        {/* <div id="browser-container">
          <div id="inner-unity">
            <Unity unityContent={this.unityContent} />
            {/* <Unity src="Build/Build/Build.json" loader="Build/Build/UnityLoader.js" /> */}
          {/* </div> */}
           {/* <div id="inner-blockly">
             <BlocklyWorkspace unitySendMessage={this.unitySendMessage} />
           </div>
         </div> */}
      </div>
    )
  }
}

export default UnityGame
