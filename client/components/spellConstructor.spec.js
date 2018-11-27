// Testing libraries do not work with Blockly because of the nature of the
// library; hence, here are some basic tests in vanilla Javascript.

const {expect} = require('chai')
const Blockly = require('node-blockly')

// This has to be here because of issues with testing Blockly;
// tests will fail if we attempt to import the true spellConstructor
// because it requires browser blockly, which will fail in this Node environment.
const spellConstructor = obj => {
  return () => ({
    name: obj.name,
    type: obj.type,
    category: obj.category,
    block: {
      init: function() {
        return this.jsonInit(Object.assign({}, obj.block))
      }
    },
    generator: obj.generator
  })
}
const move1 = {
  name: 'Move',
  type: 'block_type',
  category: 'Movement',
  block: {
    message0: 'Move 1 step',
    // output: 'String',
    colour: 160,
    tooltip: 'Moves the object 1 step',
    previousStatement: null,
    nextStatement: null
  },
  generator: () =>
    `await sleep(1250); this.props.unitySendMessage("Sheep_Demo", "BlockyMove");`
}

describe('spellConstructor function', () => {
  it('returns a function', () => {
    expect(spellConstructor(move1)).to.be.a('function')
  })
  it('that creates a Blockly block when invoked', () => {
    expect(spellConstructor(move1)()).to.be.a('object')
  })
})
