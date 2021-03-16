import { TreeType } from '@forten/tree-type'
import * as actions from './actions'
import { AddArg, selectBlockArg } from './actions'

export const tree_selectNode = 'tree_selectNode'
export const tree_treeChanged = 'tree_treeChanged'

export interface TreeConnectArg {
  blockId: string
  slotIdx: number
  tree: TreeType
}

export interface TreeChangedHook {
  (ctx: any, arg: { tree: TreeType; connecting?: TreeConnectArg }): void
}

export interface TreeContentChangedHook<T> {
  (ctx: any, arg: { tree: TreeType; blockId: string; previousContent: T }): void
}

export interface NewBlockHook<T> {
  (ctx: any, arg: AddArg): { name: string; content: T }
}

export interface SelectBlockHook {
  (ctx: any, arg: selectBlockArg): void
}

export interface TreeHooks<T = any> {
  [type: string]: {
    // The definition of the last block is used.
    newBlock: NewBlockHook<T>
    // Executed in block loading order.
    treeChanged: TreeChangedHook[]
    selectNode: SelectBlockHook[]
    contentChanged: TreeContentChangedHook<T>[]
    contentComponent: any
  }
}

export interface TreeDefinitions<T = any> {
  [type: string]: {
    newBlock?: NewBlockHook<T>
    treeChanged?: TreeChangedHook
    selectBlock?: SelectBlockHook
    contentChanged?: TreeContentChangedHook<T>
    contentComponent?: any
  }
}

export interface TreeSettings<T = any> {
  // Tree components where we show the rest of the app.
  tree?: TreeDefinitions<T>
}

export interface TreeConfig {
  state: {
    tree: {
      definitions: () => TreeHooks
    }
  }

  actions: {
    tree: typeof actions
  }
}
