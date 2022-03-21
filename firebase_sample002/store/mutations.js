import initialState from './state'

export default {
  RESET_STORE: (state) => {
    Object.assign(state, initialState())
  },

  SET_AUTH_USER: (state, { authUser }) => {
    state.authUser = {
      uid: authUser.uid,
      email: authUser.email
    }
  },

  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    if (authUser) {
      const { uid, email, displayName } = authUser
      state.authUser = { uid, email, displayName }
      // eslint-disable-next-line no-console
      console.log('success mutations', email)
    } else {
      state.authUser = false
      // eslint-disable-next-line no-console
      console.log('not success mutations')
    }
  }
}
