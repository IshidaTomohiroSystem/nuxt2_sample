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
          <el-option label="japan" value="japan" />
          <el-option label="america" value="america" />
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
import { getFirestore, doc, updateDoc, Timestamp } from 'firebase/firestore'
export default {
  middleware: ['testMiddleware'],
  data () {
    return {
      form: {
        name: ''
      },
      formInline: {
        region: ''
      }
    }
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
