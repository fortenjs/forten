import { anchorElement } from '../helpers/index.js'
import { runHooks } from '../hooks/index.js'
import { Mutation } from '../types/index.js'

export function clearSelection(m: Mutation) {
  const { comp } = m
  const { spath } = comp
  if (!spath) {
    return false
  }
  const ref = anchorElement(m)
  if (ref && ref.elem.s) {
    delete ref.elem.s
    runHooks(m, { type: 'clearSelection', ...ref })
  }
  delete comp.spath
  return true
}
