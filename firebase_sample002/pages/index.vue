<template>
  <div>
    <h1>Home</h1>
    {{ currentUser }}
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  middleware: ['testMiddleware'],
  computed: {
    currentUser () {
      return this.$store.state.authUser
    }
  }
}
</script>
