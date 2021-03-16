import { CommandEvent } from '@forten/shortcuts'
import { applyStyle, newParagraph } from '../mutations/index.js'
import { Mutation } from '../types/index.js'

export function enter(m: Mutation, e: CommandEvent) {
  if (e.shiftKey) {
    return applyStyle(m, 'E')
  } else {
    return newParagraph(m)
  }
}
