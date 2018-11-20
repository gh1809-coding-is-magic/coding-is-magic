import React from 'react'
import Blockly from 'node-blockly/browser'
import BlocklyDrawer, {
  Block,
  Category,
  workspaceXML
} from 'react-blockly-drawer'

export default class Spell {
  constructor(properties, options) {
    // these are required and sould be in Properites
    this.name = properties.name
    this.description = properties.description
    this.code = properties.code
    this.category = properties.category
    this.colour = properties.color || properties.colour
    this.tooltip = properties.tooltip

    // anything else should go here
    this.options = options !== undefined ? Object.assign(this, options) : {}
  }

  getSpell() {
    return {
      message0: this.description,
      colour: this.colour,
      tooltip: this.tooltip,
      ...this.options
    }
  }

  generator() {
    return this.code
  }
}

export const move1 = new Spell(
  {
    name: 'move1',
    description: 'move 1 step',
    code: 'console.log("move1!")',
    category: 'Movement',
    colour: 160,
    tooltip: 'Moves the object one step.'
  },
  {
    previousStatement: null,
    nextStatement: null
  }
)
