import { getSelection } from '../helpers/index.js'
import { changeText, removeRange, setSelection } from '../operations/index.js'
import { isRangeSelection, Mutation, Selection } from '../types/index.js'

export function textChanged(
  m: Mutation,
  { i, s }: { i: string; s: Selection }
) {
  const selection = getSelection(m)
  if (selection && isRangeSelection(selection)) {
    removeRange(m, selection)
  }
  changeText(m, i)
  setSelection(m, s)
  return true
}
