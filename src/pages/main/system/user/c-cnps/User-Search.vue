<template>
  <div class="usersearch">
    <el-form :model="searchForm" label-width="80px" ref="formref">
      <el-row :gutter="180">
        <el-col :span="8"
          ><div class="grid-content ep-bg-purple" />
          <el-form-item label="用户名:" prop="name">
            <el-input v-model="searchForm.name" size="large" />
          </el-form-item>
        </el-col>
        <el-col :span="8"
          ><div class="grid-content ep-bg-purple" />
          <el-form-item label="真实姓名:" prop="realname">
            <el-input v-model="searchForm.realname" size="large" />
          </el-form-item>
        </el-col>
        <el-col :span="8"
          ><div class="grid-content ep-bg-purple" />
          <el-form-item label="手机号:" prop="cellphone">
            <el-input size="large" v-model="searchForm.cellphone" /> </el-form-item
        ></el-col>
        <el-col :span="8"
          ><div class="grid-content ep-bg-purple" />
          <el-form-item label="状态:" prop="enable">
            <el-select v-model="searchForm.enable" placeholder="请选择状态" size="large">
              <el-option label="启用" :value="1" />
              <el-option label="禁用" :value="0" />
            </el-select> </el-form-item
        ></el-col>
        <el-col :span="8"
          ><div class="grid-content ep-bg-purple" />
          <el-form-item label="创建时间:" prop="createAt" size="large">
            <el-date-picker
              v-model="searchForm.createAt"
              type="daterange"
              unlink-panels
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            /> </el-form-item
        ></el-col>
      </el-row>
    </el-form>
    <div class="bottombtn">
      <el-button type="primary" icon="CircleClose" size="large" color="#626aef" @click="clearformvalue">重置</el-button>
      <el-button type="primary" icon="Search" size="large" @click="searchdata">搜索</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
const formref = ref()
const searchForm = reactive({
  name: '',
  realname: '',
  cellphone: '',
  enable: 1,
  createAt: ''
})
const emit = defineEmits(['searchdata'])
function clearformvalue() {
  formref.value.resetFields()
  emit('searchdata')
}
function searchdata() {
  emit('searchdata', searchForm)
}
</script>

<style scoped lang="less">
.usersearch {
  //   background-color: skyblue;
  padding: 30px 40px 30px 10px;
  .bottombtn {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
