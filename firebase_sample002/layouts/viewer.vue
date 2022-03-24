<template>
  <main>
    <el-container style="height: 500px; border: 1px solid #eee;">
      <Sideber />
      <Content />
    </el-container>
  </main>
</template>

<script>
import Sideber from './sideber.vue'
import Content from './content.vue'
export default {
  components: { Sideber, Content }
}
</script>

<style scoped>
</style>
