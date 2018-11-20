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

// const move1Block = spellConstructor(move1)()

// const moveAny = {
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
// }

// const moveAnyBlock = spellConstructor(moveAny)()
