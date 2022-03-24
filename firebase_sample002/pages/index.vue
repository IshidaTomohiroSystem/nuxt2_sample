<template>
  <div>
    <h1>Home</h1>
    {{ currentUser }}
    <br>
    username: {{ user.name }}
    <br>
    created_at: {{ user.create_at.toDate() }}
    <br>
    firebaseId: {{ user.firebaseId }}
    <br>
    belonging: {{ user.belonging }}
    <br>
    <NuxtLink to="/updateUserData" style="text-decoration: none;">
      <el-button type="primary">
        編集
      </el-button>
    </NuxtLink>
  </div>
</template>

<script>
// import { getFirestore, collection, query, getDoc } from 'firebase/firestore'
import { getFirestore, doc, getDoc, Timestamp } from 'firebase/firestore'

export default {
  name: 'IndexPage',
  middleware: ['testMiddleware'],
  data () {
    return {
      user: {
        id: '',
        firebaseId: '',
        name: '',
        create_at: new Timestamp()
      }
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.authUser
    }
  },
  async created () {
    const db = getFirestore()
    const docRef = doc(db, 'users', this.$store.state.authUser.uid)
    const docSnap = await getDoc(docRef)
    this.user = docSnap.data()
    // const snapShot = await getDoc(todosCol)
  }
}
</script>
