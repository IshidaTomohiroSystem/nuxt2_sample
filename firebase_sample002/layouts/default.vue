<template>
  <div>
    <main>
      <Header />
      <el-container style="height: 500px; border: 1px solid #eee;">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246);">
          <el-menu>
            <el-menu-item-group style="padding:0px">
              <template slot="title">
                Menu
              </template>
              <NuxtLink to="/" style="text-decoration: none;">
                <el-menu-item>
                  Home
                </el-menu-item>
              </NuxtLink>
              <NuxtLink to="/LoginFirebase" style="text-decoration: none;">
                <el-menu-item>
                  Login
                </el-menu-item>
              </NuxtLink>
              <NuxtLink to="/LogoutFirebase" style="text-decoration: none;">
                <el-menu-item>
                  Logout
                </el-menu-item>
              </NuxtLink>
              <NuxtLink to="/todoitems" style="text-decoration: none;">
                <el-menu-item>
                  Items
                </el-menu-item>
              </NuxtLink>
            </el-menu-item-group>
          </el-menu>
        </el-aside>
        <el-container>
          <el-header height="50px" style="font-size: 24px">
            <h1>
              Main
            </h1>
          </el-header>
          <el-main>
            <Nuxt />
          </el-main>
        </el-container>
      </el-container>
      <Footer />
    </main>
  </div>
</template>
<script>
import Header from './header.vue'
import Footer from './footer.vue'
export default {
  components: { Header, Footer }
}
</script>
<style scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 0px;
}

.el-aside {
  color: #333;
  background-color: #D3DCE6;
  line-height: 200px;
}

.el-menu-item{
  font-size: 18px;
}
</style>

<style>
.el-menu-item-group__title{
  /*padding: 0px;*/
  color: #333;
  font-size: 24px;
}
</style>
