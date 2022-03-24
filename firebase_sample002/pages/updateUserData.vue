<template>
  <div>
    <h1>
      Update
    </h1>
    <el-form :model="form" label-width="120px">
      <el-form-item label="user name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="belonging">
        <el-select v-model="formInline.region" placeholder="Activity zone">
          <span v-for="(item, index) in belongingList" :key="index">
            <el-option :label="item.belonging" :value="item.belonging" />
          </span>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :disabled="!form.name||!formInline.region" @click="onSubmit">
          登録
        </el-button>
        <NuxtLink to="/" style="text-decoration: none;">
          <el-button>
            キャンセル
          </el-button>
        </NuxtLink>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getFirestore, query, collection, onSnapshot, doc, updateDoc, Timestamp } from 'firebase/firestore'
export default {
  middleware: ['testMiddleware'],
  data () {
    return {
      form: {
        name: ''
      },
      formInline: {
        region: ''
      },
      belongingList: []
    }
  },
  created () {
    // items () {
    const result = []
    try {
      const db = getFirestore()
      const belongingCol = query(collection(db, 'belonging-list'))
      onSnapshot(belongingCol, (QuerySnapshot) => {
        QuerySnapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            const item = {
              belonging: change.doc.data().belonging
            }
            result.push(item)
          }
          if (change.type === 'modified') {
            result.forEach(function (item, index) {
              if (item.belonging === change.doc.data().belonging) {
                item.belonging = change.doc.data().belonging
              }
            })
          }
          if (change.type === 'removed') {
            result.forEach(function (item, index) {
              if (item.belonging === change.doc.data().belonging) {
                result.splice(index, 1)
              }
            })
          }
        })
      })
    } catch (e) {
    }
    this.belongingList = result
  },
  methods: {
    async onSubmit () {
      // eslint-disable-next-line no-console
      console.log('onSubmit', this.form.name, this.formInline.region)

      const uid = this.$store.state.authUser.uid
      const db = getFirestore()
      const userRef = doc(db, 'users', uid)

      await updateDoc(userRef, {
        name: this.form.name,
        update_at: Timestamp.now(),
        belonging: this.formInline.region
      })
        .then(() => {
          alert('更新完了')
        })
        .catch((error) => {
          alert('更新失敗', error)
        })
    }
  }
}
</script>

<style>

</style>
