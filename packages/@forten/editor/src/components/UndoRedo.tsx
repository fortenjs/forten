import { Icon } from '@forten/styled'
import * as React from 'react'
import { Comp, useOvermind } from '../app.js'
import { CompositionHolder } from '../lib/index.js'

export interface UndoRedoProps {
  className?: string
  holder: CompositionHolder
}

export const Undo: Comp<UndoRedoProps> = ({ className, holder }) => {
  const ctx = useOvermind()
  return (
    <Icon
      icon="Undo"
      onClick={() => ctx.actions.editor.undo({ holder })}
      className={className}
    />
  )
}

export const Redo: Comp<UndoRedoProps> = ({ className, holder }) => {
  const ctx = useOvermind()
  return (
    <Icon
      icon="Redo"
      onClick={() => ctx.actions.editor.redo({ holder })}
      className={className}
    />
  )
}
