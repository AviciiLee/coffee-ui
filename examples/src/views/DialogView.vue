<script setup lang="ts">
import { ref } from 'vue'
const show = ref(true)
</script>
<template>
  <div>
    <coffee-dialog v-model:visible="show" title="hello"> 测试一下 </coffee-dialog>
  </div>
</template>

<style lang="scss" scoped></style>
