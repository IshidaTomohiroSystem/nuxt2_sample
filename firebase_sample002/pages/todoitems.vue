<template>
  <div>
    <h2>
      todo list
    </h2>
    <div v-for="item in todoItems" :key="item.firebaseId">
      <el-card>
        <h3>{{ item.todoName }}</h3>
        <p>{{ item.id }}</p>
        <p>{{ item.firebaseId }}</p>
        <el-button type="info" @click="deleteTodo(item.firebaseId)">
          削除
        </el-button>
      </el-card>
    </div>
    <el-input v-model="input" placeholder="Please input" />
    <el-button :disabled="!input" type="primary" @click="addTodo">
      登録
    </el-button>
  </div>
</template>

<script>
import { collection, onSnapshot, getFirestore, query, orderBy, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'
export default {
  data () {
    return {
      input: '',
      todoItems: []
    }
  },
  created () {
    // items () {
    const result = []
    try {
      const db = getFirestore()
      const todosCol = query(collection(db, 'todos-item'), orderBy('id', 'asc'))
      onSnapshot(todosCol, (QuerySnapshot) => {
        QuerySnapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            const item = {
              id: change.doc.data().id,
              todoName: change.doc.data().todoName,
              firebaseId: change.doc.id
            }
            result.push(item)
          }
          if (change.type === 'modified') {
            result.forEach(function (todo, index) {
              if (todo.firebaseId === change.doc.id) {
                todo.id = change.doc.data().id
                todo.todoName = change.doc.data().todoName
                todo.firebaseId = change.doc.id
              }
            })
          }
          if (change.type === 'removed') {
            result.forEach(function (todo, index) {
              if (todo.firebaseId === change.doc.id) {
                result.splice(index, 1)
              }
            })
          }
        })
      })
    } catch (e) {
    }
    this.todoItems = result
  },
  methods: {
    async addTodo () {
      const db = getFirestore()
      const todosCol = query(collection(db, 'todos-item'))
      const snapShot = await getDocs(todosCol)

      await addDoc(collection(db, 'todos-item'), {
        id: snapShot.docs.length,
        todoName: this.input
      })
    },
    async deleteTodo (id) {
      const db = getFirestore()
      await deleteDoc(doc(db, 'todos-item', id))

      const result = []
      const todosCol = query(collection(db, 'todos-item'), orderBy('id', 'asc'))
      const querySnapshot = await getDocs(todosCol)
      querySnapshot.forEach((docTodo) => {
        const item = {
          id: docTodo.id
        }
        result.push(item)
      })
      result.forEach(function (todo, index) {
        updateDoc(doc(db, 'todos-item', todo.id), {
          id: index
        })
      })
    }
  }
}
</script>

<style>

</style>
