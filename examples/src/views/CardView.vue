<template>
  <div>
    <!-- 卡片测试 1 -->
    <coffee-card :img-src="imgSrc" summary="前端主流布局系统进阶与实战，轻松解决页面布局难题" />
    <br />
    <!-- 卡片测试 2 -->
    <coffee-card :img-src="imgSrc" summary="Google资深工程师深度讲解Go语言 由浅入深掌握Go语言">
      <template #footer>
        <div class="footer">
          <div class="level">中级 · 5225人报名</div>
          <div class="price">￥399.00</div>
        </div>
      </template>
    </coffee-card>
    <br />
    <!-- 卡片测试 3 -->
    <coffee-card :img-src="imgSrc" :width="370" :img-height="90">
      <div>路线吃透面试学问，伴随身为Java工程师的你一路成长，高效充分准备面试拿offer。</div>
      <template #footer>
        <div class="footer-java">
          <div class="level">3步骤 · 3门课</div>
          <div class="level">10982收藏</div>
        </div>
      </template>
    </coffee-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const imgSrc = ref(
  'https://i.ytimg.com/vi/0fYi8SGA20k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAS-Fm30xoVhvl3goMYUGAdG_7AbQ'
)
</script>

<style scoped>
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199a1;
  margin-bottom: 8px;
}

.price {
  color: #f01414;
}

.footer-java {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 0 8px;
}
</style>
