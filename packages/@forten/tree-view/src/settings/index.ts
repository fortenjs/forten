import { DragdropSettings } from '@forten/dragdrop'
import { StyledSettings } from '@forten/styled'
import { ThemeSettings } from '@forten/theme'
import { dragdrop } from './dragdrop/index.js'
import { styled } from './styled/index.js'
import { treeViewTheme } from './theme.js'

type Settings = ThemeSettings & DragdropSettings & StyledSettings

export const settings: Settings = {
  dragdrop,
  styled,
  theme: {
    default: treeViewTheme,
  },
}
