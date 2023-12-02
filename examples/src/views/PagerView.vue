<script setup lang="ts">
import { ref } from 'vue'
const currentPage = ref(1)
</script>
<template>
  <div>
    <coffee-pager v-model:currentPage="currentPage" :total="8"></coffee-pager>
  </div>
</template>

<style lang="scss" scoped></style>
