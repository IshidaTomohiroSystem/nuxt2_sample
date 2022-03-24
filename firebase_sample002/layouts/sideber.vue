<template>
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
            TodoList
          </el-menu-item>
        </NuxtLink>
        <NuxtLink to="/register" style="text-decoration: none;">
          <el-menu-item>
            Register
          </el-menu-item>
        </NuxtLink>
        <NuxtLink to="/loginFirebaseUI" style="text-decoration: none;">
          <el-menu-item>
            LoginFirebaseUI
          </el-menu-item>
        </NuxtLink>
      </el-menu-item-group>
    </el-menu>
  </el-aside>
</template>

<script>
export default {

}
</script>

<style scoped>
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
