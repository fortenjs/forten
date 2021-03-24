export interface ShortcutDefinition<Context = any> {
  // Returning `true` indicates that we have dealt with the event.
  // First argument is the app Context.
  callback: (ctx: Context, payload: any, e: KeyboardEvent) => boolean
  keys: string[]
  payload?: any
}

export interface Shortcuts<Context = any> {
  [name: string]: ShortcutDefinition<Context>
}

export interface ShortcutsSettings<Context = any> {
  shortcuts?: Shortcuts<Context>
}

export interface ShortcutsConfig {
  effects: {
    shortcuts: {
      run(
        e: KeyboardEvent,
        context?: string,
        extraPayload?: { [key: string]: any }
      ): boolean
    }
  }
  state: {
    shortcuts: {
      // This is set during build
      settings: () => { [cmd: string]: ShortcutDefinition[] }
      definitions: {
        // Just an indication of the existing shortcuts in the app (for debugging).
        [name: string]: string[]
      }
    }
  }
}
