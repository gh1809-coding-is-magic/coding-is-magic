import React from 'react';
import BlocklyDrawer, {
    Block,
    Category,
    workspaceXML
  } from 'react-blockly-drawer';

class LevelOne extends React.Component {
  render() {
    return (
      <div>
        <script src="blockly_compressed.js" />
        <script src="javascript_compressed.js" />
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
            disable: true,
            scrollbars: false,
            toolboxPosition: 'start'
          }}
        />
      </div>
    )
  }
}

export default LevelOne
