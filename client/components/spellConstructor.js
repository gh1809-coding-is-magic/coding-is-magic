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
  type:'block_type',
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

export const turn = spellConstructor({
  name: 'Turn',
  type:'block_type',
  category: 'Movement',
  block: {
    message0: 'Turn 90 Degrees',
   // output: 'String',
    colour: 160,
    tooltip: 'Turns the object 90 degrees',
    previousStatement: null,
    nextStatement: null
  },
  generator: () => `this.props.unitySendMessage("Sheep_Demo", "TurnNinety")`
})

export const forLoop = spellConstructor({
  name: 'For',
  category: 'Loops',
  block: {
    message0: 'Do %2, %1 times.',
    args0: [
      {
        type: 'field_dropdown',
        name: 'REPEATS',
        options: [["0", '0'], ["1", '1'], ["2", '2'], ["3", '3'], ["4", '4'], ["5", '5']]
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
  generator: () => `this.props.unitySendMessage("Sheep_Demo", "BlockyMove")`
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
