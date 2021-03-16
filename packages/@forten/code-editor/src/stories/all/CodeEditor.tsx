import {
  CodeEditor as component,
  CodeEditorProps as Props,
} from '../../index.js'
import { config, Stories } from '../helper.js'

export const codeEditor: Stories<Props> = {
  name: 'CodeEditor',
  config: config,
  stories: [
    {
      name: 'simple',
      component,
      props: ctx => ({
        id: 'foo',
        source: `const foo = 'bar'`,
        lang: 'ts',
        onChange() {
          console.log('save')
        },
      }),
    },
  ],
}
