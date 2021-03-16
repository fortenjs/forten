// So that 'async' actions work with parcel
import * as React from 'react'
import ReactDOM from 'react-dom'
import 'regenerator-runtime/runtime'
import { StoryRouter } from './components/index.js'
import { Stories } from './types.js'

export { ComponentWrapper } from './components/index.js'
export * from './testing.js'
export * from './theme.js'
export * from './types.js'

export interface StoriesDict {
  [key: string]: Stories
}

export interface RenderOptions {
  devtools?: string | boolean
  // Testing only
  beforeEach?: () => void
  // Testing only
  afterEach?: () => void
}

// only exported for testing.
export function makeApp(opts: RenderOptions, ...storiesList: StoriesDict[]) {
  const all: StoriesDict = Object.assign({}, ...storiesList)
  const stories = [...Object.keys(all).map(key => all[key])]
  return () => <StoryRouter opts={opts} stories={stories} />
}

// Cannot test ReactDOM.render...
/* istanbul ignore next */
export function renderStories(
  opts: RenderOptions = {},
  ...storiesList: StoriesDict[]
) {
  const App = makeApp(opts, ...storiesList)
  ReactDOM.render(<App />, document.getElementById('root'))
}
