import { getSelection } from '../helpers/index.js'
import { applyStyle, removeRange } from '../operations/index.js'
import { isRangeSelection, Mutation } from '../types/index.js'

export function lineBreak(m: Mutation) {
  const selection = getSelection(m)
  if (!selection) {
    return false
  }
  if (isRangeSelection(selection)) {
    removeRange(m, selection)
  }
  return applyStyle(m, 'E')
}
