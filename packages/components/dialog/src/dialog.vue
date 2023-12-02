<script setup lang="ts">
defineOptions({
  name: 'Dialog'
})
const props = withDefaults(
  defineProps<{
    visible: boolean
  }>(),
  {
    visible: false
  }
)
const emit = defineEmits(['update:visible'])
</script>
<template>
  <div></div>
</template>

<style lang="scss" scoped></style>
