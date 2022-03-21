<template>
  <div>
    <h1>
      login
    </h1>
    <form>
      email:<input v-model="email" type="text">
      <br>
      passward:<input v-model="passward" type="text">
    </form>
    <el-button type="primary" @click="logIn(email, passward)">
      Login
    </el-button>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
export default {
  data () {
    return {
      email: '',
      passward: ''
    }
  },
  methods: {
    logIn (email, passward) { // (email,password) {
      // eslint-disable-next-line no-console
      console.log('email', email)
      // eslint-disable-next-line no-console
      console.log('passward', passward)

      const auth = getAuth()
      signInWithEmailAndPassword(auth, email, passward)
        .then((userCredential) => {
        // Signed in
          const user = userCredential.user
          // eslint-disable-next-line no-console
          console.log('user', user)
        // ...
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          // eslint-disable-next-line no-console
          console.log('error', errorCode, errorMessage)
          // ..
        })
    }
  }
}
</script>
