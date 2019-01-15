<template>
  <div class="login-page">
    <el-form
    :model="loginForm"
    ref="loginForm"
    class="login-page_form" 
    :rules="rules" 
    @keyup.enter.native="formSubmit('loginForm')">
      <h1>真香自助点餐后台管理系统</h1>
      <el-form-item prop="loginname">
        <el-input placeholder="请输入账户" v-model="loginForm.loginname">
          <template slot="prepend">账号</template>
        </el-input>
      </el-form-item>
      <el-form-item prop="loginpwd">
        <el-input placeholder="请输入密码" type="password" v-model="loginForm.loginpwd">
          <template slot="prepend">密码</template>
        </el-input>
      </el-form-item>
      <el-button type="primary" @click="formSubmit('loginForm')">登录后台</el-button>
    </el-form>
    <div class="login-page_bg" :style="{backgroundImage:'url(' + bgImg +')'}"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgImg: require('_img/login/login-bg.jpg'),
      loginForm: {
        loginname: '',
        loginpwd: ''
      },
      rules: {
        loginname: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        loginpwd: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  mounted(){

  },
  methods: {
    formSubmit: function(formName){
      console.log(this.loginForm.loginname)
      this.$refs[formName].validate((valid) => {
          if (valid) {
            if(this.loginForm.loginname == 'yzlxca' && this.loginForm.loginpwd == 'yzl5211123'){
              this.$message({type: 'success', message: '登录成功'});
              this.$router.push('home')
            }else {
              this.$message({type: 'error', message: '账号或者密码错误'})
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
  }
}
</script>

<style lang="less" scoped>
.login-page{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #333;
  .login-page_form{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin-left: auto;
    margin-right: auto;
    width: 500px;
    height: 500px;
    color: #fff;
    h1{
      text-align: center;
      font-size: 0.7rem;
      margin-bottom: 75px;
      font-weight: bold;
    }
    .el-form-item{
      margin-bottom: 30px;
      .el-form-item__error{
        font-weight: bold;
      }
    }
    .el-button{
      margin-top: 40px;
      width: 100%;
    }
  }
}
.login-page_bg{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
}
</style>

