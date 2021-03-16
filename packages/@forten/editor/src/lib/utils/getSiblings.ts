import { getNeighbours } from './getNeighbours.js'
import { CompositionType, ElementRefType, PathType } from './types.js'

export function getSiblings(
  composition: CompositionType,
  path: PathType
): [ElementRefType | undefined, ElementRefType | undefined] {
  return getNeighbours(composition, path, true)
}
