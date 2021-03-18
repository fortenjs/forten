import { TreeType } from '@forten/tree-type'
import * as React from 'react'
import { Context } from '../app.js'

export const KEY_ACTIONS: {
  [key: string]: (
    ctx: { state: Context['state']; actions: Context['actions'] },
    tree: TreeType,
    selected: { id: string; editName: boolean },
    parentId: string | undefined,
    e: React.KeyboardEvent<any>
  ) => void
} = {
  ArrowUp(ctx, tree, _, parentId) {
    if (parentId) {
      // select parent
      ctx.actions.tree.selectBlock({
        id: parentId,
        tree,
        editName: false,
      })
    }
  },
  ArrowDown(ctx, tree, selected, parentId, e) {
    const block = tree.blocks[selected.id]
    if (block.closed) {
      return
    }
    if (e.altKey) {
      KEY_ACTIONS['+'](ctx, tree, selected, parentId, e)
    } else {
      const child = block.children.find(id => id !== null)
      if (child) {
        // select child
        ctx.actions.tree.selectBlock({
          id: child,
          tree,
          editName: false,
        })
      }
    }
  },
  ArrowLeft(ctx, tree, selected, parentId, e) {
    if (parentId) {
      const block = tree.blocks[parentId]
      const { children } = block
      const idx = children.indexOf(selected.id)
      if (e.altKey) {
        let i = idx - 1
        while (children[i] !== null && i >= 0) {
          i--
        }
        if (children[i] === null) {
          ctx.actions.tree.add({
            tree,
            parentId,
            slotIdx: i,
          })
        }
      } else {
        const child = children.find((id, i) => id !== null && i < idx)
        if (child) {
          // select sibling
          ctx.actions.tree.selectBlock({
            id: child,
            tree,
            editName: false,
          })
        }
      }
    }
  },
  ArrowRight(ctx, tree, selected, parentId, e) {
    if (parentId) {
      const block = tree.blocks[parentId]
      const { children } = block
      const idx = children.indexOf(selected.id)
      if (e.altKey) {
        let i = idx + 1
        while (children[i]) {
          i++
        }
        if (block.childrenCount === undefined || i < block.childrenCount) {
          ctx.actions.tree.add({
            tree,
            parentId,
            slotIdx: i,
          })
        }
      } else {
        const child = block.children.find((id, i) => id !== null && i > idx)
        if (child) {
          // select sibling
          ctx.actions.tree.selectBlock({
            id: child,
            tree,
            editName: false,
          })
        }
      }
    }
  },
  F2(ctx, tree, selected) {
    ctx.actions.tree.selectBlock({
      tree,
      id: selected.id,
      editName: true,
    })
  },
  Enter(ctx, tree, selected) {
    ctx.actions.tree.selectBlock({
      tree,
      id: selected.id,
      editContent: true,
    })
  },
  Backspace(ctx, tree, selected, parentId) {
    if (parentId) {
      ctx.actions.tree.remove({ tree, blockId: selected.id })
    }
  },
  Delete(ctx, tree, selected, parentId) {
    if (parentId) {
      ctx.actions.tree.remove({ tree, blockId: selected.id })
    }
  },
  /*
  // We try to keep tap so that it gives focus on contentComponent
  Tabx(ctx, tree, selected, parentId, e) {
    KEY_ACTIONS[e.shiftKey ? 'ArrowLeft' : 'ArrowRight'](
      ctx,
      tree,
      selected,
      parentId,
      e
    )
  },
  */
  [' ']: (ctx, tree, selected) => {
    ctx.actions.tree.setClosed({
      tree,
      blockId: selected.id,
      closed: !tree.blocks[selected.id].closed,
    })
  },
  ['+']: (ctx, tree, selected) => {
    const block = tree.blocks[selected.id]
    if (block.closed) {
      return
    }
    let idx = block.children.findIndex(id => id === null)
    if (idx < 0) {
      idx = block.children.length
    }
    if (block.childrenCount === undefined || idx < block.childrenCount) {
      ctx.actions.tree.add({
        tree,
        parentId: block.id,
        slotIdx: idx,
      })
    }
  },
}
