import { SortAscending } from './getNeighbours.js'
import { ElementsType } from './types.js'

export function firstId(g: ElementsType): string {
  return SortAscending(g)[0]
}
