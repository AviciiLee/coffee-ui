<script lang="ts">
export default {
  name: 'CoffeeButton'
}
</script>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type: 'default' | 'primary' | 'success' | 'info' | 'danger' | 'warning'
    plain?: boolean
    round?: boolean
    circle?: boolean
    disabled?: boolean
    icon?: string
  }>(),
  {
    type: 'default'
  }
)
const emits = defineEmits(['click'])
const handleClick = (e: MouseEvent) => {
  if (!props.disabled) {
    emits('click', e)
  }
}
</script>

<template>
  <div>
    <button
      class="coffee-button"
      :class="[
        `coffee-button--${type}`,
        {
          'is-plain': plain,
          'is-round': round,
          'is-circle': circle,
          'is-disabled': disabled
        }
      ]"
      :disabled="disabled"
      @click="handleClick"
    >
      <i v-if="icon" :class="`coffee-icon-${icon}`"></i>
      <span v-if="$slots.default">
        <slot></slot>
      </span>
    </button>
  </div>
</template>
