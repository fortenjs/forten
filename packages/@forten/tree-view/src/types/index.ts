export * from './ComponentType.js'
export * from './DragDrop.js'
export * from './GetTextSizeType.js'
export * from './UILayoutType.js'
export * from './UINodeType.js'
export * from './UITreeType.js'

import { TreeType } from '@forten/tree-type'
import * as actions from '../actions/index.js'
import { DropTargetInfoById } from './DragDrop.js'
import { UITreeType } from './UITreeType.js'

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
