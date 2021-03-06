import { Overmind } from 'overmind'
import { Action } from './app.js'
import { locale_set } from './types.js'

export const onInitialize: Action<Overmind<{}>> = (ctx, app) => {
  app.addMutationListener(({ path, args }) => {
    if (path.startsWith('locale.lang')) {
      // no await
      ctx.actions.hooks[locale_set]({ lang: args[0] })
    }
  })
}
