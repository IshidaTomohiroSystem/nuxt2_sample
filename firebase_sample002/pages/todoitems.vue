<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <h3>{{ item.todoName }}</h3>
      <p>{{ item.id }}</p>
    </div>
  </div>
</template>

<script>
import { collection, getDocs, getFirestore } from 'firebase/firestore'
export default {
  asyncComputed: {
    async items () {
      const result = []
      try {
        const db = getFirestore()
        const querySnapshot = await getDocs(collection(db, 'todos-item'))
        querySnapshot.forEach((doc) => {
          // eslint-disable-next-line no-console
          console.log(`${doc.id} => ${doc.data()}`)
          // eslint-disable-next-line no-console
          console.log(`${doc.id} => ${doc.data().todoName}`)
          const item = {
            id: doc.id,
            todoName: doc.data().todoName
          }
          result.push(item)
        })
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
      }
      return result
    }
  }
}
</script>

<style>

</style>
