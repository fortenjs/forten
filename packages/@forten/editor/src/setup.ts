import { Setup } from '@forten/build'
import { EditorConfig } from './editorConfig.js'
import { EditorOptions } from './lib/index.js'
import * as defaultParagraphs from './paragraphs/index.js'
import { parseOptions } from './parseOptions.js'
import { EditorSettings } from './types.js'

type Keys = keyof EditorOptions

export const setup: Setup<EditorConfig, EditorSettings> = (
  config,
  blockSettings
) => {
  const settings: EditorOptions = { paragraphs: {}, paste: {} }
  Object.keys(blockSettings).forEach(blockName => {
    const opts = blockSettings[blockName]
    const keys = Object.keys(opts) as Keys[]
    keys.forEach(key => {
      if (key === 'paragraphs') {
        // merge
        settings[key] = Object.assign(settings[key] || {}, opts[key])
      } else if (key === 'paste') {
        // merge
        settings[key] = Object.assign(settings[key] || {}, opts[key])
      } else {
        settings[key] = opts[key]
      }
    })
  })

  if (!settings.noDefaults) {
    settings.paragraphs = Object.assign(
      {},
      defaultParagraphs,
      settings.paragraphs
    )
  }

  const opts = Object.assign({}, parseOptions(settings))
  config.state.editor.options = () => opts
}
