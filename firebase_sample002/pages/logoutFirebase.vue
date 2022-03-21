<template>
  <div>
    <h1>
      LogOut
    </h1>
    <el-button type="primary" @click="logOut">
      LogOut
    </el-button>
  </div>
</template>

<script>
import { getAuth, signOut } from 'firebase/auth'
export default {
  methods: {
    logOut () {
      const auth = getAuth()
      signOut(auth).then(() => {
        // Sign-out successful.
        // eslint-disable-next-line no-console
        console.log('Sign-out successful')
      }).catch(() => {
        // An error happened.
        // eslint-disable-next-line no-console
        console.log('Sign-out error')
      })
    }
  }
}
</script>
<style>
</style>
