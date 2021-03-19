// @ts-ignore
import { PasteOperation } from '../../../index.js'
// import { fromHTML } from '../../../lib/fromHTML.js'
// import { PASTE_TEXT } from '../../../lib/utils/types.js'
// import { doPasteText } from './pasteText.js'
// import { doPasteEditor } from './pasteEditor.js'

export const pasteHtml: PasteOperation = async function (ctx, type, args) {
  // const { holder, event } = args
  // TEMPORARY HACK UNTIL WE MANAGE PROPER HTML PASTE
  return false
  /*
  // Ignore html for now.
  if (event.clipboardData.types.includes('text/rtf')) {
    // Paste from Word
    const html = wordFilter(event.clipboardData.getData(type))
    return doPasteEditor(ctx, args, fromHTML(html))
  } else if (event.clipboardData.types.includes(PASTE_TEXT)) {
    // Use text instead
    const text = event.clipboardData.getData(PASTE_TEXT)
    return doPasteText(ctx, { holder, text })
  } else {
    const html = event.clipboardData.getData(type)
    // Strip tags
    const text = html.replace(/(<([^>]+)>)/gi, '')
    return doPasteText(ctx, { holder, text })
  }
  */
}
