import { Reference } from '@forten/build'
import { BlockDefinition, TreeType } from '@forten/tree-type'

export interface LibraryDrag {
  treeType: string
  block: BlockDefinition
}

export interface TreeDrag {
  // A reference to the original graph where the drag operation started.
  origin: Reference<TreeType>
  // The dragged branch (sub-graph)
  tree: TreeType
  blockId: string
}

export interface TreeDrop {
  // The tree on which to drop.
  target: Reference<TreeType>
}

export interface DropTargetInfo {
  blockId: string
  slotIdx: number
}

export interface DropTargetInfoById {
  [key: string]: DropTargetInfo
}
