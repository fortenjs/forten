import { getSelection } from '../helpers/index.js'
import {
  removeRange,
  setSelection,
  splitParagraph,
} from '../operations/index.js'
import { isRangeSelection, Mutation } from '../types/index.js'

export function newParagraph(m: Mutation) {
  const selection = getSelection(m)
  if (!selection) {
    return false
  }
  if (isRangeSelection(selection)) {
    removeRange(m, selection)
  }
  const ns = splitParagraph(m, selection)
  return ns && setSelection(m, ns)
}
