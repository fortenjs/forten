import { Reference } from '@forten/build'
import { TreeType } from '@forten/tree-type'
import { SlotInfo } from './index.js'
import { UINodeType } from './UINodeType.js'

export interface UINodeByIdType {
  [key: string]: UINodeType
}

interface SizeType {
  width: number
  height: number
}

export interface UITreeType {
  // Same value as tree used to build uimap
  version: string
  // A reference to the tree (used during drag operation)
  tree?: Reference<TreeType>
  // collect the list of node ids to draw
  nodes: string[]
  // collect information on these elements (size, etc)
  uiNodeById: UINodeByIdType
  // total graph size
  size: SizeType
  slots: SlotInfo[]
}
