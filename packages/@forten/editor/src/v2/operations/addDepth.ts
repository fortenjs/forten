import { makeRef } from '../helpers/index.js'
import {
  Element,
  GroupElement,
  isStringElement,
  Mutation,
  StringElement,
} from '../types/index.js'

export function addDepth(m: Mutation, elem: Element) {
  if (!isStringElement(elem)) {
    return undefined
  }
  const parent = elem as GroupElement
  const child: StringElement = {
    t: 'T',
    p: 0,
    i: elem.i,
  }
  const id = makeRef(m)
  parent.g = { [id]: child }
  delete parent.i
  return { elem: child, id }
}
