<template>
  <div class="home">
    <div class="monitor-wall">
      <div class="monitor">
        <div class="monitor-icon iconfont">&#xe669;</div>
        <div class="monitor-centent">
          <h4>今日订单总数</h4>
          <p>200</p>
        </div>
      </div>
      <div class="monitor">
        <div class="monitor-icon iconfont">&#xe61b;</div>
        <div class="monitor-centent">
          <h4>今日销售总额</h4>
          <p>350000.00</p>
        </div>
      </div>
      <div class="monitor">
        <div class="monitor-icon iconfont">&#xe671;</div>
        <div class="monitor-centent">
          <h4>昨日销售总额</h4>
          <p>325874.17</p>
        </div>
      </div>
      <div class="monitor">
        <div class="monitor-icon iconfont">&#xec66;</div>
        <div class="monitor-centent">
          <h4>近七天销售总额</h4>
          <p>7588800.00</p>
        </div>
      </div>
    </div>
    <m-panel class="content-box" :title="'待处理事物'">
      <ul class="todo-list">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </m-panel>
    <m-panel class="content-box" :title="'运营快捷入口'">
      <div class="quick-entry">
        <button class="entry">
          <span class="iconfont btn-icon">&#xe669;</span>
          <span class="btn-name">添加商品</span>
        </button>
      </div>
    </m-panel>
    <el-row :gutter="50" class="content-box">
        <el-col :span="12">
          <m-panel :title="'商品总览'">
            <div class="overviews">
              <div class="data-view">
                <h4>100</h4>
                <p>已下架</p>
              </div>
              <div class="data-view">
                <h4>400</h4>
                <p>已上架</p>
              </div>
              <div class="data-view">
                <h4>50</h4>
                <p>库存紧张</p>
              </div>
              <div class="data-view">
                <h4>500</h4>
                <p>全部商品</p>
              </div>  
            </div>
          </m-panel>
        </el-col>
        <el-col :span="12">
          <m-panel :title="'客户总览'">
            <div class="overviews">
              <div class="data-view">
                <h4>100</h4>
                <p>今日新增</p>
              </div>
              <div class="data-view">
                <h4>400</h4>
                <p>昨日新增</p>
              </div>
              <div class="data-view">
                <h4>1000</h4>
                <p>本月新增</p>
              </div>
              <div class="data-view">
                <h4>5000</h4>
                <p>会员总数</p>
              </div>
            </div>  
          </m-panel>
        </el-col>
    </el-row>
    <router-view/>
  </div>
</template>

<script>
import MPanel from '_com/common/panel.vue' 
export default {
  data() {
    return {
    }
  },
  components: {
    MPanel
  }
}
</script>

<style lang="less" scoped>
.home{
  padding: 35px 45px;
}
.monitor-wall{
  display: flex;
  justify-content: space-between;
}
.monitor{
  position: relative;
  padding-left: 100px;
  width: 180px;
  height: 105px;
  border: 1px solid #5bc0bf;
  background-color: #f7f8f8;
  .monitor-icon{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 35px;
    font-size: 55px;
    font-weight: bold;
    color: #5bc0bf;
    }
  .monitor-centent{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    h4{
      font-size: 18px;
      color: #595757;
      margin-bottom: 15px;
    }
    p{
      font-size: 24px;
      font-weight: bold;
      color: #d23029;
    }
  }
}
.content-box{
  margin-top: 28px;
}
.todo-list{
  display: flex;
  flex-wrap: wrap;
  li{
    width: 425px;
    height: 60px;
    border-right: 1px solid #b5b5b5;
    border-bottom: 1px solid #b5b5b5;
    &:nth-child(3n){
      width: 426px;
      border-right: none;
    }
    &:nth-last-child(-n+3){
      border-bottom: none;
    }
  }
}
.quick-entry{
  padding: 40px 35px;
  .entry{
    position: relative;
    padding-top: 70px;
    background-color: transparent;
    color: #b5b5b6;
    text-align: center;
    &:hover{
      color: #5bc0bf;
    }
    .btn-icon{
      position: absolute;
      font-size: 52px;
      font-weight: bold;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
.overviews{
  display: flex;
  justify-content: space-between;
  padding: 52px;
  .data-view{
    text-align: center;
    h4{
      font-size: 26px;
      font-weight: bold;
      color:#f00;
    }
    p{
      margin-top: 28px;
      font-size: 18px;
    }
  }
}
</style>

