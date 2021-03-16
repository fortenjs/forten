import { IAction } from 'overmind'
import { ShortcutsConfig } from './types.js'

export type Config = ShortcutsConfig

export type Action<Input = void, Output = void> = IAction<Config, Input, Output>
