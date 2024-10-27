<template>
  <div class="loginform">
    <el-form
      :model="formdata"
      style="max-width: 300px"
      :rules="formles"
      status-icon
      ref="formref"
    >
      <el-form-item label="账号:" prop="username">
        <el-input v-model="formdata.username" />
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input type="password" show-password v-model="formdata.password" />
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { reactive, defineExpose, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { ElForm } from 'element-plus'
// import { accoutlogin } from '@/request/login/login.ts'
import useLogin from '@/store/login/login'

import { useRouter } from 'vue-router'

const store = useLogin()
const router = useRouter()
const formdata = reactive({
  username: localStorage.getItem('name') ?? '',
  password: localStorage.getItem('password') ?? ''
})
console.log(formdata)

const formles = reactive({
  username: [{ required: true, trigger: 'blur', message: '账号不能为空' }],
  password: [{ required: true, trigger: 'blur', message: '请输入密码' }]
})
const formref = ref<InstanceType<typeof ElForm>>()
function login(istrue: Boolean) {
  formref.value?.validate(async (valid) => {
    if (valid) {
      const name = formdata.username
      const password = formdata.password
      await store.fetchuserlongin({ name, password }).then((res: any) => {
        console.log('res', res)
        console.log(res)
      })
      router.push('/main')
      //   accoutlogin({ name, password }).then((res) => {
      //     console.log(res)
      //   })
      //   console.log('登录成功')
      if (istrue) {
        localStorage.setItem('name', name)
        localStorage.setItem('password', password)
        localStorage.setItem('checkbox', JSON.stringify(true))
      } else {
        localStorage.removeItem('name')
        localStorage.removeItem('password')
        localStorage.removeItem('checkbox')
      }
    } else {
      ElMessage.error('请输入正确的账号密码')
    }
  })
}
defineExpose({
  login
})
</script>
<style scoped>
.loginform {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
