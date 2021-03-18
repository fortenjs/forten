import { unproxy } from '@forten/build'
import { TreeType } from '@forten/tree-type'
import * as React from 'react'
import { Comp, styled, useOvermind } from '../app.js'
import { TreeDrag } from '../types/index.js'
import { NodeHeader } from './NodeHeader.js'
import { Nodes } from './Nodes.js'

export interface TreeProps<T = any> {
  className?: string
  tree: TreeDrag['tree']
  // Prevent dragged element as behaving like a drop zone.
  noDrop?: boolean
  // Only draw part of the Tree
  blockId?: string
  extraProps: T
}

// min-width: 0 to prevent overflow
const Wrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  min-width: 0;
`

export const Tree: Comp<TreeProps> = ({
  className,
  extraProps,
  tree,
  noDrop,
}) => {
  const ctx = useOvermind()

  if (!tree) {
    return null
  }

  const definition = ctx.state.tree.definitions()[tree.type]
  if (!definition) {
    console.error(unproxy(tree))
    throw new Error(`Missing definition for tree type '${tree.type}'.`)
  }
  const NodeEdit: Comp<{ tree: TreeType; blockId: string; extraProps: any }> =
    definition.contentComponent

  const { selected } = tree
  return (
    <Wrapper className={className}>
      <Nodes tree={tree} noDrop={noDrop} />
      {selected ? (
        <React.Fragment>
          <NodeHeader tree={tree} blockId={selected.id} />
          <NodeEdit tree={tree} blockId={selected.id} extraProps={extraProps} />
        </React.Fragment>
      ) : null}
    </Wrapper>
  )
}
