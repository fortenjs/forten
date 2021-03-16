import { AsyncAction } from '../app.js'
import { useragent_network, useragent_online } from '../types.js'

export interface NetworkChangedArg {
  // set to true if remote server is online
  app?: boolean
  // set to true if global network is online
  network?: boolean
}

export const networkChanged: AsyncAction<NetworkChangedArg> = async (
  ctx,
  arg
) => {
  const { actions, state } = ctx
  const { app, network } = arg
  if (app !== undefined) {
    state.useragent.appOnline = app
  }
  if (network !== undefined) {
    if (network !== state.useragent.hasNetwork) {
      state.useragent.hasNetwork = network
      await actions.hooks[useragent_network]({ network })
    }
  }

  // Can be offline with navigator online (server error)
  // Cannot be online with navigator offline (localhost dev bug)
  const online = state.useragent.appOnline && state.useragent.hasNetwork
  if (state.useragent.online !== online) {
    state.useragent.online = online
    await actions.hooks[useragent_online]({ online })
  }
}
