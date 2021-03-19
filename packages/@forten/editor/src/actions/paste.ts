import { AsyncAction } from '../app.js'
import { PasteArgs } from '../lib/index.js'

export const paste: AsyncAction<PasteArgs> = async (ctx, args) => {
  const { editor } = ctx.effects
  const { event } = args
  event.persist()
  editor.ensureComposition(args.holder)
  const { types } = event.clipboardData
  const pasteTypes = ctx.state.editor.options().paste
  for (const type of Object.keys(pasteTypes)) {
    if (types.includes(type)) {
      const op = pasteTypes[type]
      if (await op(ctx, type, args)) {
        // done
        break
      }
    }
  }
  ctx.actions.editor.changed(args.holder)
}
