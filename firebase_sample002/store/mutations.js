import { getFirestore, getDoc, setDoc, Timestamp, doc } from 'firebase/firestore'
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

  ON_AUTH_STATE_CHANGED_MUTATION: async (state, { authUser, claims }) => {
    if (authUser && claims) {
      const { uid, email, displayName } = authUser
      state.authUser = { uid, email, displayName }
      // eslint-disable-next-line no-console
      console.log('success mutations', email)

      const db = getFirestore()
      const user = authUser
      // eslint-disable-next-line no-console
      console.log('users', user)

      const docRef = doc(db, 'users', user.uid)
      const userDoc = await getDoc(docRef)
      if (!userDoc.exists()) {
        await setDoc(docRef, {
          name: authUser.email,
          create_at: Timestamp.now(),
          firebaseId: user.uid
        })
        alert('登録完了')
      }
    } else {
      state.authUser = false
      // eslint-disable-next-line no-console
      console.log('not success mutations')
    }
  }
}
