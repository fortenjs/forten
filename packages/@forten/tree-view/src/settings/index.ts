import { DragdropSettings } from '@forten/dragdrop'
import { StyledSettings } from '@forten/styled'
import { ThemeSettings } from '@forten/theme'
import { dragdrop } from './dragdrop'
import { styled } from './styled'
import { treeViewTheme } from './theme'

type Settings = ThemeSettings & DragdropSettings & StyledSettings

export const settings: Settings = {
  dragdrop,
  styled,
  theme: {
    default: treeViewTheme,
  },
}
