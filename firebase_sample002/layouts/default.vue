<template>
  <main>
    <Header />
    <Viewer />
    <Footer />
  </main>
</template>
<script>
import Header from './header.vue'
import Viewer from './viewer.vue'
import Footer from './footer.vue'
export default {
  components: { Header, Viewer, Footer }
}
</script>
