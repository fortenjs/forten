import { DragdropSettings } from '@forten/dragdrop'
import { LocaleSettings } from '@forten/locale'
import { StyledSettings } from '@forten/styled'
import { ThemeSettings } from '@forten/theme'
import { editorTheme } from '../theme.js'
import { EditorSettings } from '../types.js'
import { dragdrop } from './dragdrop/index.js'
import { editor } from './editor/index.js'
import { locale } from './locale/index.js'
import { styled } from './styled/index.js'

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
