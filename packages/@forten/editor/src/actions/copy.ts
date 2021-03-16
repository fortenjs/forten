import * as clipboard from 'clipboard-polyfill'
import { Action } from '../app.js'
import { extractComposition } from '../lib/extractComposition.js'
import { CompositionHolder } from '../lib/index.js'
import { toHTML } from '../lib/toHTML.js'
import { toText } from '../lib/toText.js'
import { makeRangeSelection } from '../lib/utils/rangeSelection.js'
import { SelectionType } from '../lib/utils/types.js'

export interface CopyArg {
  holder: CompositionHolder
  selection: SelectionType
}

export const copy: Action<CopyArg> = (ctx, arg) => {
  const { selection, holder } = arg
  const { editor } = ctx.effects
  const comp = editor.ensureComposition(holder)
  const subComp = extractComposition(comp, makeRangeSelection(comp, selection))
  const dt = new clipboard.ClipboardItem({
    'text/html': toHTML(subComp),
    'text/plain': toText(subComp),
    'forten/editor': JSON.stringify(subComp),
  })
  clipboard.write([dt])
}
