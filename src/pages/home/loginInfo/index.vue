<template>
  <div class="login-info">
    <div class="login-info__header">数据列表</div>
    <el-table 
      :data="tableLoginData"
      border
      row-class-name="login-info__row"
      header-cell-class-name="login-info__title"
      cell-class-name="login-info__cell">
      <el-table-column prop="deta" label="时间"></el-table-column>
      <el-table-column prop="ip" label="IP"></el-table-column>
      <el-table-column prop="regoin" label="地区"></el-table-column>
      <el-table-column prop="browser" label="浏览器"></el-table-column>
    </el-table>
    <div class="login-info__footer">
     <el-pagination
        class="login-info__pagination"
        background
        layout="total,prev, pager, next, jumper"
        :total="500">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      loginData:[{
        deta: '2018-12-16 21:56:49',
        ip: '127.0.0.1',
        regoin: '浙江省湖州市',
        browser: 'Chrome'
      }]
    }
  },
  mounted: function() {
    console.log(this.tableLoginData) 
  },
  computed: {
    tableLoginData: function() {
      return Array.from({length:13}, () => this.loginData[0])
    }
  }
}
</script>

<style lang="less" scoped>
.login-info{
  border-color: #c9caca;
}
.login-info{
  padding: 22px 25px;
  .login-info__header{
    border: 1px solid #ebeef5;
    border-bottom: none;
    text-align: center;
    height: 64px;
    line-height: 64px;
    font-size: 20px;
    font-weight: bold;
    background-color: #efefef;
    
  }
  .login-info__footer{
    position: relative;
    height: 50px;
    background-color: #efefef;
    .login-info__pagination{
      position: absolute;
      right: 25px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  /deep/.login-info__row{
    height: 50px;
  }
  /deep/ .login-info__cell{
    color: #595757;
    font-size: 16px;
    text-align: center;
  }
  /deep/ .login-info__title{
    color: #595757;
    font-size: 16px;
    text-align: center;
    background-color: #f7f8f8;
  }
}
</style>

