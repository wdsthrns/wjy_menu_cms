<template>
  <div class="user-center">
    <div class="user-info">
      <i class="iconfont">&#xe6b0;</i>
      <span class="user-name">admin</span> 
    </div>
    <div class="gun"></div>
    <div class="user-operation">
      <button class="user-operation-btn"><i class="iconfont">&#xe608;</i></button>
      <button class="user-operation-btn"><i class="iconfont">&#xe62d;</i><i class="msg-num">33</i></button>
      <button class="user-operation-btn"><i class="iconfont">&#xe620;</i></button>
    </div>
    <div class="popup">
      <div class="popup-content popup-login-info" v-show="false">
        <h3>登录信息</h3>
        <p>本次登录: <span>2018-12-9 22:31:24</span></p>
        <p>登录地区: <span>浙江省湖州市(IP: 127.0.0.1)</span></p>
        <p>上次登录:2018-12-9 22:34:35</p>
        <el-button type="text" class="user-set">账户设置</el-button>
      </div>
      <div class="popup-content popup-notice" v-show="false">
        <h3>订单提示</h3>
        <ul>
          <li>代付订单<span>10</span></li>
          <li>代发货订单<span>10</span></li>
          <li>已发货订单<span>10</span></li>
          <li>已完成订单<span>10</span></li>
        </ul>
        <h3>广告位提示</h3>
        <ul>
          <li>广告位即将到期<span>10</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.user-center{
  position: relative;
  box-sizing: border-box;
  width: 417px;
  height: 90px;
  padding-left: 92px;
  line-height: 90px;
  color: #fff;
}
.user-info{
  font-size: 18px;
  .iconfont{
    position: absolute;
    font-size: 34px;
    font-weight: bold;
  }
  .user-name{
    padding-left: 50px;
  }
}
.gun{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 215px;
  width: 1px;
  height: 30px;
  background-color: #fff;
}
.user-operation{
  display: flex;
  position: absolute;
  justify-content: space-between;
  right: 0;
  top: 0;
  height: 90px;
  width: 180px;
  .user-operation-btn{
    position: relative;
    background-color: transparent;
    color:#fff;
    .iconfont{
      font-size: 35px;
      &:hover{
        color:#eef0a4;
      }
    }
    .msg-num{
      position: absolute;
      height: 22px;
      line-height: 22px;
      width: 22px;
      font-size: 12px;
      border-radius: 50%;
      background-color: #f00;
      right: -4px;
      top: 25px;
    }
  }
}
.popup{
  position: absolute;
  top: 90px;
  color: #000;
  width: 415px;
  right: 0;
  box-shadow: -1px 3px 15px #b9b9b9;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  z-index: 9999;
  .popup-content{
    position: relative;
    padding: 0 20px 0 20px;
    line-height: normal;
    h3{
      font-size: 18px;
      font-weight: bold;
      padding-left: 20px;
      padding-right: 20px;
      height: 70px;
      line-height: 70px;
    }
  }
  .popup-login-info{
    padding-bottom: 20px;
    h3{
      border-bottom: 1px solid #d2d2d2;
      margin-bottom: 25px;
    }
    p{
      font-size: 16px;
      color: #b5b5b6;
      line-height: normal;
      padding: 10px 20px 10px 20px;
      span{
        padding-left: 5px;
        color: #727171;
      }
    }
    .user-set{
      position: absolute;
      right: 40px;
      top: 13px;
      font-size: 18px;
      color: #5bc0bf;
      font-family: '微软雅黑'
    }
  }
  .popup-notice{
    ul{
      padding:0 20px 0;
      li{
        display: block;
        position: relative;
        font-size: 16px;
        padding-bottom: 33px;
        color: #727171;
        span{
          position: absolute;
          right: 20px;
          color: #f00;
          &::before,&::after{
            color: #727171;
          }
          &::before{
            content: '(';
            padding-right: 5px;
          }
          &::after{
            content: ')';
            padding-left: 5px;
          }
        }
        
      }
    }
    ul + h3{
      border-top: 1px solid #d2d2d2;
    }
  }
}
</style>

