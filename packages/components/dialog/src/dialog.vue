<script setup lang="ts">
defineOptions({
  name: 'CoffeeDialog'
})
withDefaults(
  defineProps<{
    visible?: boolean
    title: string
    width?: string
    top?: string
  }>(),
  {
    visible: false,
    title: '',
    width: '50%',
    top: '15vh'
  }
)
const emit = defineEmits(['update:visible'])
const handleClose = () => {
  emit('update:visible', false)
}
</script>
<template>
  <transition name="dialog-fade">
    <div v-show="visible" class="coffee-dialog_wrapper">
      <div class="coffee-dialog" :style="{ width: width, marginTop: top }">
        <!-- 头部 -->
        <div class="coffee-dialog_header">
          <slot name="title">
            <span class="coffee-dialog_title">{{ title }}</span>
          </slot>
          <button @click="handleClose" class="coffee-dialog_headerbtn">
            <i>x</i>
          </button>
        </div>
        <!-- 内容 -->
        <div class="coffee-dialog_body">
          <slot></slot>
        </div>
        <!-- 底部 -->
        <div v-if="$slots.footer" class="coffee-dialog_footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
