import { IAction } from 'overmind'
import { createHook } from 'overmind-react'
import { DragdropConfig } from '../../types.js'
export { Comp, styled } from '../../app.js'

export interface TestConfig {
  state: {
    groups: {
      [key: string]: {
        [key: string]: { name: string; isName?: boolean }
      }
    }
  }
  actions: {
    group: {
      moveToGroup: Action<{
        name: string
        group: string
        target: string
      }>
    }
    test: {
      showPayload: Action<any>
    }
  }
}

type Config = TestConfig & DragdropConfig
export type Action<Input, Output = void> = IAction<Config, Input, Output>

export const useOvermind = createHook<Config>()
