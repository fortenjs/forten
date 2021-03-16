export * from './ComponentType'
export * from './DragDrop'
export * from './GetTextSizeType'
export * from './UILayoutType'
export * from './UINodeType'
export * from './UITreeType'

import { TreeType } from '@forten/tree-type'
import * as actions from '../actions'
import { DropTargetInfoById } from './DragDrop'
import { UITreeType } from './UITreeType'

export interface SlotInfo {
  x: number
  y: number
  blockId: string
  slotIdx: number
}

export interface TreeViewConfig {
  state: {
    treeView: {
      dropTarget: DropTargetInfoById
      dragTree?: TreeType
      // Pseudo tree (only used to store blocks and meta information)
      library: TreeType
      // Cached uimap
      uimap: {
        [key: string]: UITreeType
      }
    }
  }

  actions: {
    treeView: typeof actions
  }
}
