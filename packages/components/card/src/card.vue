<script lang="ts">
export default {
  name: 'CoffeeCard'
}
</script>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    width?: number
    imgSrc?: string
    imgHeight?: number
    summary?: string
  }>(),
  {
    width: 0,
    imgHeight: 0,
    summary: ''
  }
)
</script>
<template>
  <div class="coffee-card" :style="width ? { width: width + 'px' } : {}">
    <div class="coffee-card-img" :style="imgHeight ? { height: imgHeight + 'px' } : {}">
      <img :src="imgSrc" alt="img" />
    </div>
    <div v-if="summary" class="coffee-card-summary">{{ summary }}</div>
    <div v-else class="coffee-card-summary">
      <slot></slot>
    </div>
    <div class="coffee-card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
