<template>
  <div class="breadcrumb">
    <h2>系统首页</h2>
    <el-button class="F5" plain icon="el-icon-refresh">刷新</el-button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.breadcrumb{
  position: relative;
  height: 60px;
  background-color: #efefef;
  &>h2,&>.F5{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  h2{
    height: 30px;
    line-height: 30px;
    font-size: 22px;
    font-weight: bold;
    border-left: 15px solid #5bc0bf;
    padding-left: 32px;
  }
  .F5{
    right: 44px;
  }
}
</style>
