import { themeProxy } from '@forten/theme'
import { IAction, IContext } from 'overmind'
import { createHook } from 'overmind-react'
import { FunctionComponent as Comp } from 'react'
import styled, { css } from 'styled-components'
import { dragdropTheme } from './theme.js'
import { DragdropConfig } from './types.js'

export { css, styled, Comp }

export const theme = themeProxy(dragdropTheme)

export type Config = DragdropConfig

export type Context = IContext<Config>

export type Action<Input = void, Output = void> = IAction<Config, Input, Output>

export const useOvermind = createHook<Config>()
