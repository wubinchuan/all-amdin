<template>
  <div class="usersearch">
    <el-form :model="searchForm" label-width="80px" ref="formref">
      <el-row :gutter="180">
        <template v-for="item in props.searchConfig.itemlist" :key="item">
          <template v-if="item.type === 'input'">
            <el-col :span="8">
              <el-form-item :label="item.label" :prop="item.prop">
                <el-input v-model="searchForm[item.prop]" size="large" />
              </el-form-item>
            </el-col>
          </template>
          <template v-if="item.type === 'select'">
            <el-col :span="8">
              <el-form-item :label="item.label" :prop="item.prop">
                <el-select v-model="searchForm[item.prop]" placeholder="请选择状态" size="large">
                  <template v-for="children in item.children" :key="children">
                    <el-option v-bind="children" />
                  </template>
                </el-select>
              </el-form-item>
            </el-col>
          </template>
          <template v-if="item.type === 'select'">
            <el-col :span="8">
              <el-form-item :label="item.label" :prop="item.prop">
                <el-select v-model="searchForm[item.prop]" placeholder="请选择状态" size="large">
                  <template v-for="children in item.children" :key="children">
                    <el-option v-bind="children" />
                  </template>
                </el-select>
              </el-form-item>
            </el-col>
          </template>
          <template v-else-if="item.type === 'timer'">
            <el-col :span="8">
              <el-form-item :label="item.label" :prop="item.prop">
                <el-date-picker
                  v-model="searchForm[item.prop]"
                  type="daterange"
                  size="large"
                  unlink-panels
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                />
              </el-form-item>
            </el-col>
          </template>
        </template>
      </el-row>
    </el-form>
    <div class="bottombtn">
      <el-button type="primary" icon="CircleClose" size="large" color="#626aef" @click="clearformvalue">重置</el-button>
      <el-button type="primary" icon="Search" size="large" @click="searchdata">搜索</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
type proptype = {
  searchConfig: {
    pageName: string
    itemlist: any[]
  }
}
import { reactive, ref } from 'vue'
const props = defineProps<proptype>()
console.log(props.searchConfig.itemlist)

const formref = ref()
const searchForm: any = reactive({
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
