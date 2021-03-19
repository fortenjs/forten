import { Action } from '../../app.js'
import { CompositionHolder } from '../../index.js'
import { backspace as op } from '../actions/index.js'
import { sortAscending } from '../helpers/index.js'
import { Composition } from '../types/index.js'

export interface BackspaceArg {
  holder: CompositionHolder
}

export const backspace: Action<BackspaceArg> = (ctx, value) => {
  const { editor } = ctx.effects
  const comp = editor.ensureComposition(value.holder) as Composition
  op({ comp, sortedIds: sortAscending(comp.g) })
}
