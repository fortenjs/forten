import { TreeType } from '@forten/tree-type'
import * as React from 'react'
import { Comp, styled, useOvermind } from '../app.js'

export interface NodeNameProps {
  className?: string
  tree: TreeType
  blockId: string
}

interface NodeRenameProps {
  className?: string
  tree: TreeType
  blockId: string
}

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
`

const Name = styled.div`
  padding: 5px;
  flex-grow: 1;
`

const MyInput = styled.input`
  font-family: inherit;
  border: none;
  border-radius: 2px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  font-size: inherit;
  flex-grow: 1;
  padding: 5px;
  margin: 0;
  width: 0;
  background: #ffd58840;
  &:focus {
    outline: none;
  }
`

const BlockRename: Comp<NodeRenameProps> = ({ className, blockId, tree }) => {
  const ctx = useOvermind()
  const block = tree.blocks[blockId]
  const [oldValue] = React.useState<string>(block.name)
  const [value, setValue] = React.useState<string>(block.name)

  function onKeyDown(e: React.KeyboardEvent) {
    switch (e.key) {
      case 'Escape':
        ctx.actions.tree.setName({
          tree,
          blockId,
          name: oldValue,
          done: true,
        })
        break
      case 'Enter':
        ctx.actions.tree.setName({
          tree,
          blockId,
          name: value,
          done: true,
        })
        break
      /*
      case 'Tab':
        ctx.actions.tree.setName({
          tree,
          blockId,
          name: target.value,
          done: true,
        })
        break
        */
    }
  }

  return (
    <MyInput
      autoFocus
      onFocus={e => e.target.select()}
      onKeyDown={onKeyDown}
      value={value}
      onChange={e => {
        const target = e.target as HTMLInputElement
        setValue(target.value)
      }}
    />
  )
}

export const BlockName: Comp<NodeNameProps> = ({ blockId, tree }) => {
  const ctx = useOvermind()
  const rename = tree.selected && tree.selected.editName
  const block = tree.blocks[blockId]
  const onClick = rename
    ? undefined
    : (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        e.preventDefault()
        ctx.actions.tree.selectBlock({
          tree,
          id: blockId,
          editName: true,
        })
      }
  return (
    <Wrapper onClick={onClick}>
      {rename ? (
        <BlockRename tree={tree} blockId={blockId} />
      ) : (
        <Name>{block.name}</Name>
      )}
    </Wrapper>
  )
}
