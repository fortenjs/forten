import { Mutation, Selection } from '../types/index.js'
import { atPath } from './atPath.js'

export function getSelection(m: Mutation): Selection | undefined {
  const { spath } = m.comp
  if (!spath) {
    return undefined
  }
  const elem = atPath(m, spath.split('.'))
  return (elem && elem.s) || undefined
}
