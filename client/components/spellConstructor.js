import Blockly from 'node-blockly/browser'

const spellConstructor = obj => {
  return () => ({
    name: obj.name,
    type: obj.type,
    disabled: obj.diabled,
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
  generator: () => `this.props.unitySendMessage("Sheep_Demo", "BlockyMove");`
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
  generator: () => `this.props.unitySendMessage("Sheep_Demo", "TurnNinety");`
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
    tooltip: 'Repeat an action to object as many times as you set',
    setDisabled: true,
  },
  generator: function() {
    return `for(let i=0;i<${this.getFieldValue('REPEATS')}; i++){${Blockly.JavaScript.statementToCode(this, 'STATEMENTS')}}`
  }
})

export const ifStatement = spellConstructor({
  name: 'If',
  category: 'Logic',
  block: {
    message0: '',
    args0: [
      {
        type: 'input_statement',
        name: 'CONDITION'
      },
      {
        type: 'input_statement',
        name: 'ACTIONS'
      }
    ],
    output: 'String',
    colour: 270,
    tooltip: 'Do something based on a condition.'
  },
  generator: function() {
    return `
    if (${Blockly.JavaScript.statementToCode(this, 'CONDITION')} === true) {
      ${Blockly.JavaScript.statementToCode(this, 'ACTIONS')}
    }
    `
  }
})

// else?
