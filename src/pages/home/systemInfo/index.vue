<template>
  <el-row class="system-info">
    <el-col v-for="(item, index) in systemInfo" :key="index" :span=12 class="system-info__tebel">
      <el-col :span=8><div class="system-info__label">{{ item[0] }}</div></el-col>
      <el-col :span=16><div class="system-info__info">{{ item[1] }}</div></el-col>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data(){
    return {
      systemInfo: [
        ['服务器操作系统', 'Linux(114.55.34.251)'], ['Web服务器', 'nginx/1.10.2'], ['PHP版本', '5.6.30'], ['MySQL版本', '5.5.56'],
        ['安全模式', '否'], ['安全模式GID', '否'], ['Socket支持', '是'], ['时区设置', 'Asia/Shanghai'], 
        ['GD版本', 'GD2(JPEG GIF PNG)'], ['Zlib支持', '是'], ['IP库版本', '20071024'], ['文件上传的最大大小', '40M'],
        ['程序版本', 'v2.2.2 RELEASE 20170629'], ['安全日期', '2017-05-02'], ['编码', 'UTF-8'], [' ',' '],
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.system-info{
  border: 1px solid #b5b5b5;
  margin: 35px;
  .system-info__tebel{
    border-right:  1px solid #b5b5b5;
    border-bottom:  1px solid #b5b5b5;
    font-size: 16px;
    line-height: 50px;
    color: #595757;
    &:nth-last-child(odd){
      border-right:  none;
    }
    &:nth-last-child(-n+2){
      border-bottom:  none;
    }
    .system-info__label{
      border-right:  1px solid #b5b5b5;
      height: 50px;
      text-align: center;
      background-color: #efefef;
    }
    .system-info__info{
      padding-left: 42px;
    }
  }
}
</style>
