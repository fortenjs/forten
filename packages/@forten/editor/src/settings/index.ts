import { DragdropSettings } from '@forten/dragdrop'
import { LocaleSettings } from '@forten/locale'
import { StyledSettings } from '@forten/styled'
import { ThemeSettings } from '@forten/theme'
import { editorTheme } from '../theme'
import { EditorSettings } from '../types'
import { dragdrop } from './dragdrop'
import { editor } from './editor'
import { locale } from './locale'
import { styled } from './styled'

type Settings = DragdropSettings &
  EditorSettings &
  LocaleSettings &
  ThemeSettings &
  StyledSettings

export const settings: Settings = {
  dragdrop,
  editor,
  locale,
  styled,
  theme: {
    default: editorTheme,
  },
}
