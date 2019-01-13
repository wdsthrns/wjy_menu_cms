<template>
  <el-container class="main">
    <el-aside width="260px"><g-sidebar/></el-aside>
    <el-container>
      <el-header><g-breadcrumb/></el-header>
      <el-main><router-view/></el-main>
    </el-container>
  </el-container>
</template>

<script>
import GSidebar from '_com/public/sidebar/index.vue'
import GBreadcrumb from '_com/public/breadcrumb/index.vue'
export default {
  components:{
    GSidebar,
    GBreadcrumb
  },
  mounted: function() {
    console.log(this.$route.path, this.$router)
  }
} 
</script>

<style>

</style>
