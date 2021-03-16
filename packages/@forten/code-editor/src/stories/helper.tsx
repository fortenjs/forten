import { build, settings } from '@forten/build'
import { TStories } from '@forten/story'
import { createHook } from 'overmind-react'
import { styled } from '../app.js'
import { codeEditor } from '../index.js'

export { styled }

export const config = build({
  name: 'test',
  settings: settings({}),
  state: {
    test: {},
  },
})
  .using(codeEditor)
  .config()

export const useOvermind = createHook<typeof config>()
export type Stories<Props = any> = TStories<typeof config, Props>
