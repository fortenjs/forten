import { CommandEvent } from '@forten/shortcuts'
import { Action } from '../../app.js'
import { CompositionHolder } from '../../index.js'
import { enter as op } from '../actions/index.js'
import { sortAscending } from '../helpers/index.js'
import { Composition } from '../types/index.js'

export interface EnterArg {
  holder: CompositionHolder
  cmd: CommandEvent
}

export const enter: Action<EnterArg> = (ctx, value) => {
  const { editor } = ctx.effects
  const comp = editor.ensureComposition(value.holder) as Composition
  op({ comp, sortedIds: sortAscending(comp.g) }, value.cmd)
}
