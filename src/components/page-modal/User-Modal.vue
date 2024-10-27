<template>
  <div class="usermodal">
    <el-dialog v-model="centerDialogVisible" title="修改数据" width="30%" center>
      <div class="form">
        <el-form :model="formData" class="formbox" label-width="120px">
          <el-form-item label="名称 :" :prop="formData.name">
            <el-input v-model="formData.name" width="120px" />
          </el-form-item>
          <el-form-item label="密码 :" :prop="formData.realname">
            <el-input v-model="formData.realname" width="120px" />
          </el-form-item>
          <el-form-item label="电话号码 :" :prop="formData.cellphone">
            <el-input v-model="formData.cellphone" width="120px" />
          </el-form-item>
          <el-form-item label="状态 :" :prop="formData.enable">
            <el-select v-model="formData.enable" placeholder="Select">
              <el-option label="禁用" :value="0" />
              <el-option label="启用" :value="1" />
            </el-select>
          </el-form-item>
          <el-form-item label="选择角色" prop="roleId">
            <el-select v-model="formData.roleId" placeholder="请选择角色" style="width: 100%">
              <template v-for="item in entireRoles" :key="item.id">
                <el-option :label="item.name" :value="item.id" />
              </template>
            </el-select>
          </el-form-item>
          <el-form-item label="选择部门" prop="departmentId">
            <el-select v-model="formData.departmentId" placeholder="请选择部门" style="width: 100%">
              <template v-for="item in entireDepartments" :key="item.id">
                <el-option :label="item.name" :value="item.id" />
              </template>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">关闭</el-button>
          <el-button type="primary" @click="handleupdateorcreate">{{ iscreates ? '修改' : '创建' }}</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts" name="user">
import usemain from '@/store/main/main'
import useUser from '@/store/user/user'
import { storeToRefs } from 'pinia'
import { reactive, ref } from 'vue'
const store = useUser()
const mainstore = usemain()
const { entireDepartments, entireRoles }: any = storeToRefs(mainstore)
const formData = reactive<any>({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  enable: '',
  departmentId: ''
})
const iscreates = ref(false)
let itemdata: any = reactive({})
const centerDialogVisible = ref(false)
function controllermodal(iscreate?: boolean, data?: any) {
  if (iscreate && data) {
    for (const item in formData) {
      console.log(item, data[item])

      formData[item] = data[item]
    }
    iscreates.value = iscreate
    centerDialogVisible.value = true
    itemdata = data
  } else {
    centerDialogVisible.value = true
  }
}
function handleupdateorcreate() {
  if (iscreates.value) {
    store.updateuser(itemdata.id, formData)
  } else {
    //操作新增
    store.createuser(formData)
  }
}
defineExpose({
  controllermodal
})
</script>

<style scoped lang="less">
.formbox {
  padding: 30px 80px;
  box-sizing: border-box;
  .form {
    padding: 0 50px;
  }
}
</style>
