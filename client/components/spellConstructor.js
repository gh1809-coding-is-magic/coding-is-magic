const spellConstructor = obj => {
  return () => ({
    name: obj.name,
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
  name: 'Move1',
  category: 'Movement',
  block: {
    message0: 'Move 1 step',
    output: 'String',
    colour: 160,
    tooltip: 'Moves the object 1 step'
  },
  generator: () => `this.props.unitySendMessage("Sheep_Demo", "BlockyMove")`
})

export const forLoop = spellConstructor({
  name: 'For',
  category: 'Movement',
  block: {
    message0: '%1 %2 %3',
    args0: [
    {
      type: "field_number",
      name: "REPEATS",
      value: 0,
      min: 1, 
      max: 5
    },
    {
      type: "input_value",
      name: "NUMBER_REPEATS",
      check: "Number",
      align: "RIGHT"
    },
    {
      type: "input_statements",
      name: "STATEMENTS"
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
