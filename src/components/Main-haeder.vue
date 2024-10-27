<template>
  <div class="mainheader">
    <div class="left">
      <div class="lefticon" @click="handleiconclick">
        <el-icon size="40px"><Expand /></el-icon>
      </div>
      <div class="mbx">
        <el-breadcrumb :separator-icon="ArrowRight">
          <template v-for="item in mbxlist" :key="item.name">
            <el-breadcrumb-item :to="item.path">{{
              item.name
            }}</el-breadcrumb-item>
          </template>
        </el-breadcrumb>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>
<script setup lang="ts">
import useLogin from '@/store/login/login'
import { mapTombx } from '@/utils/maprouterchild'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
type mbxresultdatatype = {
  name: string
  path: string
}
const route = useRoute()
const store = useLogin()
const mbxlist = computed(() => {
  return mapTombx(route.path, store.useremun)
})
const emit = defineEmits(['handleiconclick'])
function handleiconclick() {
  console.log('点击事件')

  emit('handleiconclick')
}
</script>
<style scoped lang="less">
.mainheader {
  display: flex;
  align-items: center;
  height: 100%;

  .left {
    display: flex;
    align-items: center;
    .mbx {
      flex-shrink: 0;
      font-size: 18px;
      line-height: 18px;
      margin-left: 20px;
    }
  }
  .right {
    display: flex;
    align-items: center;
  }
}
</style>
