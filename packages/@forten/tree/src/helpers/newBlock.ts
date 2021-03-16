import { BlockDefinition, TreeType } from '@forten/tree-type'
import { makeId } from './makeId.js'

export function newBlock(
  definition: { content: any; name: string },
  blocks: TreeType['blocks'] = {}
): BlockDefinition {
  const block: BlockDefinition = {
    id: makeId(blocks),
    children: [],
    ...definition,
  }
  return block
}
