import * as React from 'react'
import { Comp, styled } from '../app.js'
import { RenderOptions } from '../index.js'
import { Stories } from '../types.js'
import { StoryGroup } from './StoryGroup.js'

interface StoryRouterProps {
  className?: string
  stories: Stories[]
  opts: RenderOptions
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, monospace;
`

export const StoryRouter: Comp<StoryRouterProps> = function StoryRouter({
  className,
  opts,
  stories,
}) {
  return (
    <Wrapper className={className}>
      {stories.map((group, idx) => (
        <StoryGroup key={idx} opts={opts} stories={group} />
      ))}
    </Wrapper>
  )
}
