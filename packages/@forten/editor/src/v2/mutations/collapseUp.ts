import { closest } from '../helpers/closest.js'
import { rangeSelection } from '../helpers/index.js'
import { removeRange } from '../operations/index.js'
import { isStringElement, Mutation } from '../types/index.js'

export function collapseUp(m: Mutation, path: string[]) {
  const prev = closest(m, path, 'up', true)
  if (!prev || !isStringElement(prev.elem)) {
    return false
  }
  return removeRange(m, rangeSelection(prev.path, prev.elem.i.length, path, 0))
}
