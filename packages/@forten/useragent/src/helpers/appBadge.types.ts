// THIS FILE SHOULD BE KEPT IN SYNC WITH '@forten/useragent'
// UNTIL WE PUBLISH '@forten/useragent' AND CAN IMPORT
// FROM THERE.

export const appBadge = 'appBadge'
export const appBadge_set = 'appBadge_set'

export interface AppBadgeAPI {
  set(text: string): void
}

declare global {
  interface Window {
    [appBadge]?: AppBadgeAPI
  }
}
