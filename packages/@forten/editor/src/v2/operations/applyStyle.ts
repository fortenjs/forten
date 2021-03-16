import { isCustomElement } from '../../lib/index.js'
import { getSelection, rangeSelection } from '../helpers/index.js'
import {
  ElementRef,
  isRangeSelection,
  Mutation,
  TypeName,
} from '../types/index.js'
import { applyToRange } from './applyToRange.js'
import { clearSelection } from './clearSelection.js'

export function applyStyle(m: Mutation, t: TypeName) {
  const selection = getSelection(m)
  if (!selection) {
    return false
  }
  clearSelection(m)
  const s = isRangeSelection(selection)
    ? selection
    : rangeSelection(
        selection.anchorPath,
        selection.anchorOffset,
        selection.anchorPath,
        selection.anchorOffset
      )
  applyToRange(m, true, s, list => {
    if (list.find(r => r.elem.t !== t)) {
      list.forEach(r => addType(r, t))
    } else {
      list.forEach(r => removeType(r, t))
    }
  })
  return true
}

function addType(r: ElementRef, t: TypeName) {
  if (isCustomElement(r.elem)) {
    return
  }
  // TODO B+I
  r.elem.t = t
}

function removeType(r: ElementRef, t: TypeName) {
  if (isCustomElement(r.elem)) {
    return
  }
  // TODO B+I
  r.elem.t = r.path.length > 1 ? 'T' : 'P'
}
