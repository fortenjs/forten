import { CompositionHolder } from '../lib/index.js'
import { getAtPath } from '../lib/utils/getAtPath.js'

export function clearSelection(holder: CompositionHolder) {
  const { composition } = holder
  if (!composition) {
    return
  }
  const { spath } = composition
  if (!spath) {
    return
  }
  const elem = getAtPath(composition, spath.split('.'))
  if (elem && elem.s) {
    delete elem.s
  }
  delete composition.spath
}
