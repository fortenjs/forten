import { SortDescending } from './getNeighbours.js'
import { ElementsType } from './types.js'

export function lastId(g: ElementsType): string {
  return SortDescending(g)[0]
}
