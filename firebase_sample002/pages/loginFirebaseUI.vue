<template>
  <div>
    <h2>
      LoginFirebaseUI
    </h2>
    <div id="firebaseui-auth-container" />
    <div id="loader">
      Loading...
    </div>
  </div>
</template>

<script>
import { getAuth } from 'firebase/auth'

export default {
  mounted () {
    // eslint-disable-next-line no-console
    console.log(this.$fireModule.auth)
    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        this.$fireModule.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult (authResult, redirectUrl) {
          return false
        },
        uiShown () {
          // The widget is rendered.
          // Hide the loader.
          document.getElementById('loader').style.display = 'none'
        }
      }
    }
    require('firebaseui/dist/firebaseui.css')
    const firebaseui = require('firebaseui')
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(getAuth())
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>

<style>

</style>
