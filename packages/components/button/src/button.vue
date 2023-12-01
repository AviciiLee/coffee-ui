<script lang="ts">
export default {
  name: 'CoffeeButton'
}
</script>

<script setup lang="ts">
import type { buttonProps } from './button'
const props = defineProps<buttonProps>()
</script>

<template>
  <div>
    <button class="coffee-button">
      <slot></slot>
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
