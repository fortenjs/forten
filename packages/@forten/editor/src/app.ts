import { DragdropConfig } from '@forten/dragdrop'
import { LocaleConfig } from '@forten/locale'
import { ShortcutsConfig } from '@forten/shortcuts'
import { StyledConfig, styledDefaultTheme } from '@forten/styled'
import { ThemeConfig, themeProxy } from '@forten/theme'
import { IAction, IContext, IOperator } from 'overmind'
import { createHook } from 'overmind-react'
import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { EditorConfig } from './editorConfig.js'
import { editorTheme } from './theme.js'

export { styled }

export type Comp<T = {}> = FunctionComponent<T>

export type Config = DragdropConfig &
  EditorConfig &
  LocaleConfig &
  StyledConfig &
  ShortcutsConfig &
  ThemeConfig

export const theme = themeProxy(
  Object.assign({}, styledDefaultTheme, editorTheme)
)

export type Action<Input = void, Output = void> = IAction<Config, Input, Output>
export type AsyncAction<Input = void, Output = void> = IAction<
  Config,
  Input,
  Promise<Output>
>
export type Operator<Input = void, Output = Input> = IOperator<
  Config,
  Input,
  Output
>

export const useOvermind = createHook<Config>()

export type Context = IContext<Config>
