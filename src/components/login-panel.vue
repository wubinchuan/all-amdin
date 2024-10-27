<template>
  <div class="loginpanel">
    <h1 class="title">众森教育管理后台</h1>
    <div class="tabs">
      <el-tabs v-model="tabsname" type="card" class="demo-tabs" stretch>
        <el-tab-pane label="账号登录" name="">
          <loginFrom ref="userform"></loginFrom>
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="手机登录"> 手机登录 </el-tab-pane>
      </el-tabs>
    </div>
    <div class="control">
      <el-checkbox v-model="ckstatus">记住密码</el-checkbox>
      <el-link type="success">忘记密码</el-link>
    </div>
    <el-button class="loginbtn" @click="handlelogin" type="primary"
      >登录</el-button
    >
  </div>
</template>
<script setup lang="ts">
import {  ref } from 'vue'
import loginFrom from './Login-from.vue'
const tabsname = ref('')
const ckstatus = ref(JSON.parse(localStorage.getItem('checkbox') as string))
const userform = ref<InstanceType<typeof loginFrom>>()
console.log(JSON.parse(localStorage.getItem('checkbox') as string))

const handlelogin = () => {
  userform.value?.login(ckstatus.value)
}
</script>
<style scoped lang="less">
.loginpanel {
  margin-bottom: 80px;
  width: 330px;
}
.title {
  text-align: center;
  margin-bottom: 10px;
}
.tabs {
  border: 1px solid #f3f3f3;
}
.control {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.loginbtn {
  margin-top: 10px;
  width: 100%;
  height: 42px;
}
</style>