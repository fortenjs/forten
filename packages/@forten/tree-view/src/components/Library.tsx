import { draggable } from '@forten/dragdrop'
import { Icon, Resizable } from '@forten/styled'
import classnames from 'classnames'
import { darken, desaturate } from 'polished'
import * as React from 'react'
import { Comp, css, styled, useOvermind } from '../app.js'
import { colorName, indices, pfill } from '../helpers/index.js'
import { sortLibrary } from '../helpers/sortLibrary.js'
import { LibraryDrag } from '../types/index.js'
import { BlockName } from './BlockName.js'
import { StyledScroll } from './StyledScroll.js'

export interface LibraryProps {
  className?: string
}

const Wrapper = styled(Resizable)`
  padding: 0.5rem;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  width: 200px;
  & .Handle {
    bottom: auto;
    top: 0;
    background: #333;
    border-radius: 0;
  }
`

const List = styled(StyledScroll)`
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 60px;
`

const Element = styled.div`
  cursor: pointer;
  font-size: 0.8rem;
  color: #333;
  opacity: 0.85;
  &.unselected {
    opacity: 0.6;
  }
  &.selected {
    opacity: 1;
  }
  ${indices
    .map(
      paletteIdx => css`
        &.box${paletteIdx} {
          background: ${desaturate(0.1, darken(0.1, pfill(paletteIdx)))};
        }
      `
    )
    .join('\n')};
  background: #777;
  padding: 3px 8px;
  border-bottom: 1px solid #222;
`

const Search = styled(Element)`
  opacity: 0.2;
`

function scrollStop(this: HTMLDivElement, e: any) {
  // el.scrollTop -= e.wheelDeltaY
  const delta = e.type === 'mousewheel' ? e.wheelDelta : e.detail * -40
  if (
    delta < 0 &&
    this.scrollHeight - this.offsetHeight - this.scrollTop <= 0
  ) {
    this.scrollTop = this.scrollHeight
    e.preventDefault()
  } else if (delta > 0 && delta > this.scrollTop) {
    this.scrollTop = 0
    e.preventDefault()
  }
}

export const Library: Comp<LibraryProps> = ({ className }) => {
  const ctx = useOvermind()
  function setupScroll(el: HTMLDivElement) {
    if (!el) {
      return
    }
    el.addEventListener('mousewheel', scrollStop)
    el.addEventListener('DOMMouseScroll', scrollStop)
  }
  const tree = ctx.state.treeView.library
  const editId = tree.selected?.editName && tree.selected?.id
  const blocks = Object.values(tree.blocks)
    // root should not be shown as list of blocks
    .filter(block => block.id !== tree.entry)
    .sort(sortLibrary)
  return (
    <Wrapper
      className={className}
      name="library"
      type="width"
      defaultWidth={160}
    >
      <Search>
        <Icon icon="search" />
      </Search>
      <List
        ref={setupScroll as any}
        className="LibraryList"
        tabIndex={0}
        onKeyDown={e => {
          if (e.key !== 'Tab') {
            e.preventDefault()
            e.stopPropagation()
          }
          if (e.key === 'F2') {
            ctx.actions.treeView.navigateLibrary({ operation: 'editName' })
          } else if (e.key === 'Enter') {
            ctx.actions.treeView.navigateLibrary({ operation: 'editContent' })
          } else if (e.key === 'ArrowRight') {
            const tree = document.querySelector('.Tree') as HTMLElement
            if (tree) {
              tree.focus()
            }
          } else if (e.key === 'ArrowUp') {
            ctx.actions.treeView.navigateLibrary({ operation: 'up' })
          } else if (e.key === 'ArrowDown') {
            ctx.actions.treeView.navigateLibrary({ operation: 'down' })
          }
        }}
      >
        {blocks.map(block =>
          editId === block.id ? (
            <BlockName tree={tree} blockId={block.id} />
          ) : (
            <Element
              key={block.id}
              onDoubleClick={e => {
                e.stopPropagation()
                ctx.actions.tree.selectBlock({
                  id: block.id,
                  tree,
                  editName: true,
                })
              }}
              {...draggable<LibraryDrag>(ctx, {
                className: classnames(colorName(block.name), {
                  selected: block.id === tree.selected?.id,
                  unselected: tree.selected && block.id !== tree.selected.id,
                }),
                drag: 'tree',
                payload: { block, treeType: tree.type },
                onClick: e => {
                  e.stopPropagation()
                  ctx.actions.tree.selectBlock({
                    id: block.id,
                    tree,
                    editName: false,
                  })
                },
              })}
            >
              {block.name}
            </Element>
          )
        )}
      </List>
    </Wrapper>
  )
}
