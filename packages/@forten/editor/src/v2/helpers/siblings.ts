import { ElementRef, Elements } from '../types/index.js'
import { sortAscending } from './sorting.js'

export function siblings(
  { g }: { g: Elements },
  basepath: string[],
  id: string,
  sortedIds: string[] = sortAscending(g)
): (ElementRef | undefined)[] {
  const pos = sortedIds.indexOf(id)
  if (pos < 0) {
    return []
  }
  const pi = sortedIds[pos - 1]
  const ni = sortedIds[pos + 1]
  const pe = g[pi]
  const ne = g[ni]
  return [
    pe ? { path: [...basepath, pi], elem: pe } : undefined,
    ne ? { path: [...basepath, ni], elem: ne } : undefined,
  ]
}
