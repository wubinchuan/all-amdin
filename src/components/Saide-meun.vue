<template>
  <div class="aside">
    <div class="title">
      <img class="asideimg" src="../assets/img/logo.svg" alt="" />
      <span class="spantext" v-show="!isicon">众森教育管理后台</span>
    </div>
    <div class="emun">
      <el-menu
        :default-active="defaultvalue.id + ''"
        class="el-menu-vertical-demo"
        active-text-color="#fff"
        :collapse="isicon"
        background-color="#001529"
        collapse-transition
      >
        <template v-for="item in store.useremun" :key="item.id">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon><component :is="item.icon.split('-icon-')[1]"></component></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="iten in item.children" :key="iten.id">
              <el-menu-item :index="iten.id + ''" @click="handleitemclick(iten)">{{ iten.name }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>
<script setup lang="ts">
import useLogin from '@/store/login/login'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { maprouteToemun } from '@/utils/maprouterchild'
const router = useRouter()
const store = useLogin()
const route = useRoute()

defineProps({
  isicon: {
    type: Boolean,
    default: false
  }
})
function handleitemclick(item: any) {
  router.push(item.url)
}

const defaultvalue = computed(() => {
  const indexpath = route.path
  const resultpath = maprouteToemun(indexpath, store.useremun)
  return resultpath
})
</script>
<style scoped lang="less">
.aside {
  background-color: #001529;

  .emun {
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    .el-menu-item.is-active {
      background-color: skyblue;
    }
  }
  &::-webkit-scrollbar {
    width: 0; /* 设置滚动条宽度为0 */
  }
  overflow-x: hidden;
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;

    position: relative;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    .spantext {
      color: white;
      margin-left: 5px;
    }
  }
  .asideimg {
    width: 36px;
    height: 36px;
  }
}
.el-menu-vertical-demo {
  --el-menu-text-color: white;
  .el-menu {
    border-right: none;
  }
}
</style>
