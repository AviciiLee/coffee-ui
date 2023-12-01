<script lang="ts">
export default {
  name: 'CoffeeButton'
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
const txt = ref('按钮1')
</script>

<template>
  <div>
    <button>
      <slot>{{ txt }}</slot>
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
