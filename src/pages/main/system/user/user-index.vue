<template>
  <div class="user">
    <div class="search">
      <UserSearch @searchdata="searchdataa" />
    </div>
    <div class="content">
      <UserContent ref="contentref" @update="handledataupdate" @createnew="handlecreatenew" />
    </div>
    <div class="modal">
      <UserModal ref="modalref" />
    </div>
  </div>
</template>

<script setup lang="ts" name="user">
import UserContent from './c-cnps/User-Content.vue'
import UserSearch from './c-cnps/User-Search.vue'
import UserModal from './c-cnps/User-Modal.vue'
import { ref } from 'vue'
const contentref = ref<InstanceType<typeof UserContent>>()
const modalref = ref<InstanceType<typeof UserModal>>()
function searchdataa(data: object) {
  console.log('dsd', data, contentref.value)
  // controllermodal
  contentref.value?.fetchdata(data)
}
function handledataupdate(rowdata: any) {
  console.log('捕获')

  modalref.value?.controllermodal(true, rowdata)
}
function handlecreatenew() {
  modalref.value?.controllermodal(false)
}
</script>

<style scoped>

</style>
