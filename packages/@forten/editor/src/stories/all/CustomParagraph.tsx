import { Stories } from '@forten/story'
import { Editor as component, EditorProps as Props } from '../../index.js'
import { config, makeComposition } from '../helpers.js'

export const customStories: Stories<Props> = {
  name: 'Custom paragraph',
  component,
  config,
  stories: [
    {
      name: 'simple',
      props(app: any) {
        return { holder: app.state.c1, id: 'c1' }
      },
      state: {
        c1: makeComposition({ id: 'para1', title: 'Custom paragraph' })
          .addParagraph('para2', {
            t: 'p',
            c: 'X',
            p: 1,
          })
          .setData('para2', { value: 0.5 })
          .done(),
      },
    },
  ],
}
