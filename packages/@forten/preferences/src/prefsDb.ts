import { unproxy } from '@forten/build'
import Dexie from 'dexie'
import { PrefsDb } from './types.js'

export const dummyDb: PrefsDb = {
  close: async () => {},
  delete: async () => {},
  setValue: async () => {},
  getValues: async () => [],
  reset: async () => {},
}

export function dbname(name: string = 'default') {
  return `prefs-${name.slice(0, 10)}${
    // istanbul ignore next
    process.env.NODE_ENV !== 'production' ? `-${process.env.NODE_ENV}` : ''
  }`
}

export class DexieDb extends Dexie {
  values: Dexie.Table<{ value: any; path: string }, string>

  constructor(name: string) {
    super(name)
    this.version(1).stores({
      values: 'path',
    })
    this.values = this.table('values')
  }
}

export async function prefsDb(
  userId: string | undefined,
  defaults: { [path: string]: any }
): Promise<PrefsDb> {
  const name = dbname(userId)
  const isNew = !(await Dexie.exists(name))
  const db = new DexieDb(name)
  const api: PrefsDb = {
    close: makeClose(db),
    delete: makeDelete(db),
    setValue: makeSetValue(db),
    getValues: makeGetValues(db),
    reset: makeReset(db),
  }
  if (isNew) {
    // Insert defaults
    for (const path in defaults) {
      const value = defaults[path]
      await api.setValue(path, value)
    }
  }
  return api
}

// For testing
function makeReset(db: DexieDb): PrefsDb['reset'] {
  return async () => db.values.clear()
}

function makeClose(db: DexieDb): PrefsDb['close'] {
  return async () => db.close()
}

function makeDelete(db: DexieDb): PrefsDb['delete'] {
  return async () => db.delete()
}

function makeSetValue(db: DexieDb) {
  return async (path: string, value: any) => {
    if (typeof value === 'function') {
      return
    }
    await db.values.put({
      path,
      value: typeof value === 'object' ? unproxy(value) : value,
    })
  }
}

function makeGetValues(db: DexieDb) {
  return async () => {
    const values: { path: string; value: any }[] = []
    await db.values.each(rec => {
      values.push(rec)
    })
    return values
  }
}
