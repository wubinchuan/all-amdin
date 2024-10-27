<template>
  <div class="usercontent">
    <div class="header">
      <div class="headertitle">{{contentConfig.headertitle}}</div>
      <el-button type="primary" icon="Edit" @click="createnew">新建部门</el-button>
    </div>
    <el-table :data="userlist" border style="width: 100%">
      <el-table-column type="selection" align="center"/>
      <el-table-column type="index" label="序号" align="center" width="80px"/>
      <el-table-column prop="name" label="用户名" width="180" align="center"/>

      <el-table-column prop="realname" label="真实名称" align="center"/>
      <el-table-column prop="cellphone" label="电话号码" width="180" align="center"/>
      <el-table-column prop="enable" label="状态" width="100px" align="center">
        <template #default="scope">
          <el-button type="primary">{{ !!scope.row.enable ? '启用' : '禁用' }}</el-button>
        </template>
      </el-table-column >
      <el-table-column prop="createAt" label="创建时间" align="center"/>
      <el-table-column prop="updateAt" label="修改时间" align="center"/>
      <el-table-column label="操作" align="center" width="180px">
        <template #default="scope">
          <el-button color="skyblue" type="primary" plain @click="updatedata(scope.row)">修改</el-button>
          <el-button color="skyblue" type="primary" plain @click="deletitem(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        v-model:currentPage="currentpage"
        v-model:page-size="pagesize"
        :page-sizes="[10, 20, 30, 40]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalcount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts" name="user">
import { storeToRefs } from 'pinia'
import useUser from '@/store/user/user'
import { ref } from 'vue'
const currentpage = ref(1)
const pagesize = ref(10)
const store = useUser()
interface Niu{
  contentConfig:{
    pageName:string,
    headertitle:string,
    itemlist:any[]
  }
}
const props=defineProps<Niu>()
const emit = defineEmits(['update',"createnew"])
fetchdata()
//每页数量发生变化
function handleSizeChange(e: any) {
  pagesize.value = e
  fetchdata()
}
//页数发生变化
function handleCurrentChange(e: any) {
  currentpage.value = e
  fetchdata()
}
//修改
function updatedata(rowdata: object) {
  console.log(rowdata)
  emit('update', rowdata)
}
//删除
function deletitem(id:number){
  console.log(id);
  store.deleteuser(id)
  fetchdata()
}
//新建
function createnew (){
  emit("createnew")
}
function fetchdata(data?: object) {
  let querydata = { offset: (currentpage.value - 1) * pagesize.value, size: pagesize.value }
  if (data) {
    querydata = { ...querydata, ...data }
  }
  store.fetchuserlist(querydata)
}

const { userlist, totalcount } = storeToRefs(store)

defineExpose({
  fetchdata
})
</script>

<style scoped>
.usercontent {
  padding: 30px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    .headertitle{
      font-size: 18px;
      font-weight: bold;
    }

  }
  .page{
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }
}
</style>
