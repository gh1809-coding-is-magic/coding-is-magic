import React from 'react';
import Unity, {UnityContent} from 'react-unity-webgl';
import BlocklyWorkspace from './BlocklyWorkspace';

class UnityGame extends React.Component {
  constructor() {
    super();

    this.unityContent = new UnityContent(
      'Build/Build.json',
      'Build/UnityLoader.js',
      {adjustOnWindowResize: true}
    );

    this.unitySendMessage = this.unitySendMessage.bind(this);
  };

  unitySendMessage(unityObj, funcName, message) {
    this.unityContent.send(unityObj, funcName, message);
  }

  render() {
    return (
      <div id="unity-container">
        <div id="inner-unity" style={{
            top: 0,
            left: 0,
            width: '500px',
            height: '300px'
        }}>
          <Unity unityContent={this.unityContent} width="500px" height="500px" />
          <BlocklyWorkspace unitySendMessage={this.unitySendMessage}/>
        </div>
      </div>
    )
  };
};

export default UnityGame;
