import React from 'react'
import Blockly from 'node-blockly/browser'
import BlocklyDrawer, {
  Block,
  Category,
  workspaceXML
} from 'react-blockly-drawer'
import {move1, forLoop, turn} from './spellConstructor'
import LevelOne from './LevelOne'
import LevelTwo from './LevelTwo'

class BlocklyWorkspace extends React.Component {
  constructor() {
    super()

    //State keeps track of outputted Unity messages and blocks in the workspace
    this.state = {
      currCode: '',
      currWorkspace: '',
      counter: 0
    }
  }

  //Sets up Blockly workspace and updates state with each new block placement
  render() {
    return (
      <div id="blockly-content">
        <script src="blockly_compressed.js" />
        <script src="javascript_compressed.js" />
        {this.state.counter === 0 ? (
          <LevelOne
            unitySendMessage={this.props.unitySendMessage}
          />
        ) : (
          <LevelTwo
            unitySendMessage={this.props.unitySendMessage}
          />
        )}
        <button
          type="button"
          className="next-button"
          onClick={() => this.setState({counter: this.state.counter + 1})}
        >
          Next
        </button>
      </div>
      // </div>
    )
  }
}

export default BlocklyWorkspace
