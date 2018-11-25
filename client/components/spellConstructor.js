import Blockly from 'node-blockly/browser'

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

export default spellConstructor

// EXAMPLES OF PROPER USE

export const move1 = spellConstructor({
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
  generator: () => `this.props.unitySendMessage("Sheep_Demo", "BlockyMove")`
})

export const forLoop = spellConstructor({
  name: 'For',
  category: 'Loops',
  block: {
    message0: 'Do %2 %1 times.',
    args0: [
      {
        type: 'field_dropdown',
        name: 'REPEATS',
        options: [['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5']]
      },
      {
        type: 'input_statement',
        name: 'STATEMENTS'
      }
    ],
    output: 'String',
    colour: 270,
    tooltip: 'Repeat an action to object as many times as you set'
  },
  generator: function() {
    return `
    for (let i = 0; i < ${this.getFieldValue('REPEATS')}; i++) {
      ${Blockly.JavaScript.statementToCode(this, 'STATEMENTS')}
    }`
  }
})

// const move1Block = spellConstructor(move1)()

// const moveAny = spellConstructor({
//   name: 'MoveAny',
//   category: 'Movement',
//   block: {
//     message0: 'Move %1 number of steps',
//     args0: [{type: 'field_input', name: 'STEPS', check: 'Number'}],
//     output: 'String',
//     colour: 160,
//     tooltip: 'Move the object an input number of steps'
//   },
//   generator: function(block) {
//     return `this.props.unitySendMessage('Sheep_Demo', 'BlockyMove(${block.getFieldValue(
//       'STEPS'
//     )})')`
//   }
// })

// const moveAnyBlock = spellConstructor(moveAny)()
