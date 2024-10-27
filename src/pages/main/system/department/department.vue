<template>
  <div class="department">
    <UserSearch :searchConfig="searchConfig"/>
    <UserContent :contentConfig="contentConfig"/>
  </div>
</template>

<script setup lang="ts">
import UserSearch from "@/components/page-search/User-Search.vue"
import UserContent from "@/components/page-content/User-Content.vue";
import searchConfig from "./department-search";
import contentConfig from "./depart-content";

</script>

<style scoped>

</style>
