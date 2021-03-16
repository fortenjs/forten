import { mutate } from 'overmind'
import { Inspector as component, InspectorProps as Props } from '../../index.js'
import { config, Stories } from '../helpers.js'

export const inspector: Stories<Props> = {
  name: 'Inspector',
  component,
  config,
  stories: [
    {
      titleClick: mutate(({ state }) => {
        state.test.hasDocument = !state.test.hasDocument
      }),
      name: 'inspector',
    },
  ],
}
