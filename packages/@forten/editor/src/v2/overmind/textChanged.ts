import { Action } from '../../app.js'
import { CompositionHolder } from '../../index.js'
import { textChanged as op } from '../actions/index.js'
import { sortAscending } from '../helpers/index.js'
import { Composition, Selection } from '../types/index.js'

export interface TextChangedArg {
  holder: CompositionHolder
  i: string
  s: Selection
}

export const textChanged: Action<TextChangedArg> = (ctx, value) => {
  const { editor } = ctx.effects
  const comp = editor.ensureComposition(value.holder) as Composition
  op({ comp, sortedIds: sortAscending(comp.g) }, value)
}
