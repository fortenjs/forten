import * as React from 'react'
// @ts-ignore
import * as renderer from 'react-test-renderer'
import { StoryDisplay } from './components/StoryDisplay.js'
import { RenderOptions, StoriesDict } from './index.js'
import { Stories, Story } from './types.js'

if (process.env.NODE_ENV === 'test') {
  require('jest-styled-components')
}

declare var describe: any
declare var it: any
declare var expect: any
declare var beforeEach: any
declare var afterEach: any

function testStory(stories: Stories, story: Story, opts: RenderOptions) {
  it(`should render ${story.name}`, () => {
    const tree = renderer
      .create(<StoryDisplay stories={stories} opts={opts} story={story} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
}

export function testStories(
  opts: RenderOptions,
  ...storiesList: StoriesDict[]
) {
  const { beforeEach: before, afterEach: after } = opts
  const all: StoriesDict = Object.assign({}, ...storiesList)
  const list = [...Object.keys(all).map(key => all[key])]
  list.forEach(stories => {
    describe(stories.name, () => {
      if (before) {
        beforeEach(before)
      }
      if (after) {
        afterEach(after)
      }
      stories.stories.forEach(story => {
        testStory(stories, story, Object.assign({}, opts, { devtools: false }))
      })
    })
  })
}
