<template>
  <div class="app">
    <el-container class="container">
      <el-aside :width="isicon ? '68px' : '210px'" class="aside">
        <saide-meun :isicon="isicon" />
      </el-aside>
      <el-container>
        <el-header class="header"
          ><main-haeder @handleiconclick="updateisicon"
        /></el-header>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import useLogin from '@/store/login/login'
import MainHaeder from '@/components/Main-haeder.vue'
import { useRouter } from 'vue-router'
import SaideMeun from '@/components/Saide-meun.vue'

const store = useLogin()
const isicon = ref(false)
function updateisicon() {
  console.log('接收时间')

  isicon.value = !isicon.value
}

const router = useRouter()
function handleexit() {
  router.push('/login')
}
</script>
<style lang="less" scoped>
.app {
  width: 100vw;
  height: 100vh;
  .container {
    height: 100%;
  }
  .aside {
    background-color: rgba(1, 20, 43);
    &::-webkit-scrollbar {
      width: 0; /* 设置滚动条宽度为0 */
    }
  }
}
</style>
