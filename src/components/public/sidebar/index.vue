<template>
  <div class="sidebar">
    <template v-for="(item, index) in sidePages" >
      <ul class="side-menu" :key="index">
        <h4>{{ item.title }}</h4>
        <li class="side-item" v-for="(page, i) in item.pages" :key="i">
          <router-link :to=page.link> {{ page.page }} </router-link>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidePages: [
        {
          title: "系统首页",
          pages: [
            {page: '系统首页', link: '/home'},
            {page: '账户设置', link: '/home/account_security'},
            {page: '系统信息', link: '/home/system_info'},
            {page: '登录日志', link: '/home/login_info'},
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.sidebar{
  height: 100%;
}
.side-menu{
  background-color: #efefef;
  width: 100%;
  font-size: 18px;
  text-align: center;
  color: #595757;
  h4{
    color: #b9b9ba;
    height: 60px;
    line-height: 60px;
  }
  .side-item{
    display: block;
    position: relative;
    box-sizing: content-box;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #e5e5e5;
    a{
      display: inline-block;
      width: 100%;
      height: 100%;
    }
    &::before{
      position: absolute;
      content: '·';
      left: 80px;
    }
    &:hover{
      background-color: #fff;
      color: #5bc0bf;
      border-color: #5bc0bf;
    }
  }
}
</style>

