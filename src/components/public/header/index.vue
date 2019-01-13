<template>
  <div class="header">
    <div class="logo">LOGO</div>
    <ul class="m-menu">
      <li v-for="(item, index) in menuItem" :key="index">
        {{ item }}
      </li>
    </ul>
    <div class="user-canter">
      <user-center/>
    </div>
  </div>
</template>

<script>
import UserCenter from './userCenter.vue'
export default {
  data() {
    return {
      menuItem: ['首页', '商品', '订单', '库存', '用户', '促销', '运营', '内容', '统计', '财务', '设置', '权限']
    };
  },
  components: {
    UserCenter
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.header{
  position: relative;
  width: 1630px;
  margin-left: auto;
  margin-right: auto;
  height: 90px;
  color:#fff;
}
 .logo{
    width: 154px;
    font-size: 45px;
    line-height: 90px;
    padding-left: 28px;
  }
  .m-menu{
    position: absolute;
    display: flex;
    left: 180px;
    top: 0;
    li{
      width: 80px;
      height: 90px;
      line-height: 90px;
      text-align: center;
      &:hover{
        background-color: #7ccdcc;
      }
      &.active{
        background-color: #7ccdcc;
      }
    }
  }
  .user-center{
    position: absolute;
    right: 0;
    top: 0;
    height: 90px;
    width: 420px;
    line-height: 90px;
  }
</style>
