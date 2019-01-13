<template>
  <div class="account_security">
    <el-form label-width="90px" action="#" class="form">
      <img class="avatar" :src="defaultImg" alt="">
      <el-upload action="#">点击上传</el-upload>
      <el-form-item label="用户名">
        <el-input v-model="setForm.name" disabled></el-input>
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="setForm.email" disabled></el-input>
      </el-form-item>
      <el-form-item label="旧密码">
        <el-input v-model="setForm.oldPassword"></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="setForm.newPassword"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="setForm.newPasswordAgain"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultImg: require('_img/account_security/Avatar.png'),
      setForm: {
        name: 'admin',
        email: '10088888@163.com',
        oldPassword: '',
        newPassword: '',
        newPasswordAgain: ''
      }
    }
  },
  mounted: ()=>{
  
  }
}
</script>

<style lang="less" scoped>
.account_security{
  text-align: center;
  .form{
    max-width: 425px;
    padding-top: 135px;
    margin-left: auto;
    margin-right: auto;
    .avatar{
      width: 160px;
    }
    /deep/ .el-upload--text{
      color:#5bc0bf;
      padding: 14px 0;
      font-size: 18px;
    }
    /deep/ .el-form-item{
      margin-bottom: 16px;
      transform: translateX(-45.5px);
      .submit{
        width: 126px;
        margin-top: 40px;
        background-color: #5bc0bf;
        border-color: #5bc0bf;
      }
      .el-input{
        font-size: 18px;
      }
      .el-input.is-disabled .el-input__inner{
        color: #595757;
      }
      .el-input__inner{
       height: 50px;
      }
      .el-form-item__label{
        position: relative;
        font-size: 18px;
        line-height: 50px;
        &::before{
          content: "*";
          color: #f00;
          font-size: 22.5px;
          position: absolute;
          top: 50%;
          transform: translate(-12px,-40%);
        }
      }
    }
  }
}
</style>
