// import { Middleware } from '@nuxt/types'
function testMiddleware ({ app, store, redirect }) {
  // eslint-disable-next-line no-console
  console.log(store.state.authUser)
  if (app.$fire.auth) {
    // eslint-disable-next-line no-console
    console.log('in testMiddleware')
    if (!store.state.authUser) {
      return redirect('/LoginFirebase')
    }
  }
  // eslint-disable-next-line no-console
  console.log('out testMiddleware')
}

export default testMiddleware
