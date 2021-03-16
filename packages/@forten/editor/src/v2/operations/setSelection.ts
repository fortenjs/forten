import { atPath } from '../helpers/index.js'
import { Mutation, sameSelection, Selection } from '../types/index.js'
import { clearSelection } from './clearSelection.js'

export function setSelection(m: Mutation, selection: Selection) {
  const elem = atPath(m, selection.anchorPath)
  if (!elem) {
    return false
  }

  const spath = selection.anchorPath.join('.')
  if (elem.s && sameSelection(elem.s, selection)) {
    // Do we need to update position ?
    // elem.s.position = selection.position
    return false
  }

  clearSelection(m)
  elem.s = selection
  m.comp.spath = spath
  return true
}
