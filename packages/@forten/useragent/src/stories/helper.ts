import { build, settings } from '@forten/build'
import { HooksSettings } from '@forten/hooks'
import { TStories } from '@forten/story'
import { styled as styledBlock, StyledSettings } from '@forten/styled'
import { createHook } from 'overmind-react'
import { FunctionComponent as Comp } from 'react'
import styled from 'styled-components'
import { useragent } from '../index.js'
import { UseragentHooks, UseragentSettings } from '../types.js'
import { icons } from './icons.js'

export { Comp, styled }

export const config = build({
  name: 'test',
  settings: settings<
    StyledSettings & UseragentSettings & HooksSettings<UseragentHooks>
  >({
    hooks: {
      useragent_online(ctx, { online }) {
        if (online) {
          ctx.state.test.message = 'We are online :-)'
        } else {
          ctx.state.test.message = 'We are offline :-('
        }
      },
    },
    styled: {
      icons,
    },
  }),
  state: {
    test: {
      message: 'no message',
    },
  },
})
  .using(useragent)
  .using(styledBlock)
  .config()

export const useOvermind = createHook<typeof config>()

export type Stories<Props> = TStories<typeof config, Props>
