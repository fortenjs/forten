import { anchorElement } from '../helpers/index.js'
import {
  collapseUp,
  deleteParagraph,
  removePreviousChar,
  removeRange,
} from '../mutations/index.js'
import { isRangeSelection, isStringElement, Mutation } from '../types/index.js'

export function backspace(m: Mutation) {
  const ref = anchorElement(m)
  if (!ref) {
    return false
  }
  const { elem, path } = ref
  const s = elem.s!
  if (isRangeSelection(s)) {
    removeRange(m, s)
  } else {
    if (isStringElement(elem)) {
      if (s.anchorOffset > 0) {
        removePreviousChar(m, elem)
      } else {
        collapseUp(m, ref.path)
      }
    } else {
      // Custom element (rule 5).
      deleteParagraph(m, path[0])
    }
  }
  return true
}
