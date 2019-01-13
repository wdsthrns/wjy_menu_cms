<template>
  <div class="panel">
    <div class="title">{{ title }}</div>
    <slot/>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="less" scoped>
.panel{
  border: 1px solid #b5b5b5;
  .title{
    font-size: 22px;
    font-weight: bold;
    padding-left: 22px;
    height: 60px;
    line-height: 60px;
    background-color: #efefef;
    border-bottom: 1px solid #b5b5b5;
  }
}
</style>
