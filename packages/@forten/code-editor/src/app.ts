import { LocaleConfig } from '@forten/locale'
import { themeProxy } from '@forten/theme'
import { IAction, IContext } from 'overmind'
import { createHook } from 'overmind-react'
import { FunctionComponent as Comp } from 'react'
import styled from 'styled-components'
import { codeEditorTheme } from './theme.js'
import { CodeEditorConfig } from './types.js'

export { styled, Comp }

export function css(strings: TemplateStringsArray, ...values: any[]): string {
  return strings.map((s, idx) => s + (values[idx] || '')).join('')
}

export type Config = CodeEditorConfig & LocaleConfig
export type Context = IContext<Config>

export const theme = themeProxy(codeEditorTheme)

export const useOvermind = createHook<Config>()

export type Action<Input = void, Output = void> = IAction<Config, Input, Output>
