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
  nodeId: string
  slotIdx: number
}

export interface LibraryElement {
  // tree type
  type: string
  name: string
  content: any
}

export interface TreeViewConfig {
  state: {
    treeView: {
      dropTarget: DropTargetInfoById
      libraryTree?: TreeType
      library: LibraryElement[]
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
