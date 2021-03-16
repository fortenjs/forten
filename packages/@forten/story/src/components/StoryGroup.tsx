import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { Comp } from '../app.js'
import { RenderOptions } from '../index.js'
import { Stories } from '../types.js'
import { StoryDisplay } from './StoryDisplay.js'

const GroupTitle = styled.div`
  padding: 10px;
  cursor: pointer;
  user-select: none;
`

const GroupStories = styled.div``

interface StoryGroupProps {
  className?: string
  stories: Stories
  opts: RenderOptions
}

const Wrapper = styled.div`
  border-left: 3px solid #eee;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`

export const StoryGroup: Comp<StoryGroupProps> = function StoryGroup({
  className,
  opts,
  stories,
}) {
  const [open, setOpen] = useState(true)

  /* istanbul ignore next */
  const style = { display: open ? 'block' : 'none' }
  return (
    <Wrapper className={className}>
      <GroupTitle onClick={/* istanbul ignore next */ () => setOpen(!open)}>
        {stories.name}
      </GroupTitle>
      <GroupStories style={style}>
        {stories.stories.map((story, idx) => (
          <StoryDisplay key={idx} story={story} opts={opts} stories={stories} />
        ))}
      </GroupStories>
    </Wrapper>
  )
}
