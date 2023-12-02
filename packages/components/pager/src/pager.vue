<script setup lang="ts">
import { computed } from 'vue'
defineOptions({
  name: 'CoffeePager'
})
const props = withDefaults(
  defineProps<{
    total?: number
    currentPage?: number
    pagerCount?: number
  }>(),
  {
    total: 0,
    currentPage: 1,
    pagerCount: 10
  }
)
const pager = computed(() => {
  const renderPage: number[] = []
  // 总页数小于等于分页数
  if (props.total <= props.pagerCount) {
    for (let i = 1; i <= props.total; ++i) {
      renderPage.push(i)
    }
  } else {
    // 总页数大于分页数
    if (props.currentPage <= 5) {
      for (let i = 1; i <= 5; ++i) {
        renderPage.push(i)
      }
    } else if (props.currentPage >= props.total - 4) {
      for (let i = props.total - 4; i <= props.total; ++i) {
        renderPage.push(i)
      }
    } else {
      for (let i = props.currentPage - 2; i <= props.currentPage + 2; ++i) {
        renderPage.push(i)
      }
    }
  }
  return renderPage
})
const emit = defineEmits(['update:currentPage'])
const pageClick = (currentPage: number) => {
  emit('update:currentPage', currentPage)
}
</script>
<template>
  <div class="coffee-pager">
    <!-- 首页 -->
    <a :class="currentPage === 1 ? 'disabled' : ''">首页</a>
    <!-- 上一页 -->
    <a :class="currentPage === 1 ? 'disabled' : ''">&lt;</a>

    <a v-if="total > pagerCount && currentPage > 5" @click.prevent="pageClick(1)">1</a>
    <a v-if="total > pagerCount && currentPage > 5">...</a>
    <a
      v-for="page in pager"
      :key="page"
      :class="page === currentPage ? 'active' : ''"
      @click.prevent="pageClick(page)"
      >{{ page }}</a
    >
    <a v-if="total > pagerCount && currentPage < total - 4">...</a>
    <a v-if="total > pagerCount && currentPage < total - 4" @click.prevent="pageClick(total)">{{
      total
    }}</a>

    <!-- 下一页 -->
    <a :class="currentPage === total ? 'disabled' : ''">&gt;</a>
    <!-- 尾页 -->
    <a :class="currentPage === total ? 'disabled' : ''">尾页</a>
  </div>
</template>
