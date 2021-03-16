import { TreeType } from '@forten/tree-type'
import * as React from 'react'
import { Comp, styled, useOvermind } from '../app'
import { TreeDrag } from '../types'
import { NodeHeader } from './NodeHeader'
import { Nodes } from './Nodes'

export interface TreeProps<T = any> {
  className?: string
  tree: TreeDrag['tree']
  // Prevent dragged element as behaving like a drop zone.
  noDrop?: boolean
  // Only draw part of the Tree
  blockId?: string
  extraProps: T
}

const Wrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
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
