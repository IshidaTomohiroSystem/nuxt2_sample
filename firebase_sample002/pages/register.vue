<template>
  <div class="demo-input-size">
    <h1>
      Register
    </h1>
    email:
    <el-input v-model="email" placeholder="Please input" size="small" style="width:200px" />
    <br>
    passward:
    <el-input v-model="passward" placeholder="Please input" size="small" style="width:200px" />
    <br>
    <el-button type="primary" :disabled="!email || !passward" @click="createUser">
      submit
    </el-button>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export default {
  data () {
    return {
      email: '',
      passward: ''
    }
  },
  methods: {
    createUser () {
      const auth = getAuth()

      createUserWithEmailAndPassword(auth, this.email, this.passward)
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user
          const user = userCredential.user
          // eslint-disable-next-line no-console
          console.log('users', user)
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code
          // const errorMessage = error.message
          alert('登録失敗')
          const errorCode = error.code
          const errorMessage = error.message
          // eslint-disable-next-line no-console
          console.log(errorCode, errorMessage)
          // ..
        })
    }
  }
}
</script>

<style>

</style>
