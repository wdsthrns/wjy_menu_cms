<template>
<div id="app">
  <el-container>
    <el-header height="90px"><g-header/></el-header>
    <el-container class="g-body">
      <el-main><router-view/></el-main>
    </el-container>
  </el-container>
</div>
</template>

<script>
import GHeader from '_com/public/header/index.vue'
export default {
  name: 'app',
  components: {
    GHeader
  }
}
</script>

<style lang="less">
*{
  &::-webkit-scrollbar{
    display: none;
  }
}
.el-header{
  padding: 0;
  background-color: #5bc0bf;
}
.g-body{
  width: 1630px;
  margin-left: auto;
  margin-right: auto;
}
.el-main{
  padding: 0;
}
</style>
