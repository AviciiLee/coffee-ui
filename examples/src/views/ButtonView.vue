<script setup lang="ts"></script>

<template>
  <div style="display: flex; flex-direction: column">
    <div class="row">
      <coffee-button>按钮</coffee-button>
      <coffee-button type="primary">按钮</coffee-button>
      <coffee-button type="success">按钮</coffee-button>
      <coffee-button type="info">按钮</coffee-button>
      <coffee-button type="danger">按钮</coffee-button>
      <coffee-button type="warning">按钮</coffee-button>
    </div>
    <div class="row">
      <coffee-button>按钮</coffee-button>
      <coffee-button type="primary" plain>按钮</coffee-button>
      <coffee-button type="success" plain>按钮</coffee-button>
      <coffee-button type="info" plain>按钮</coffee-button>
      <coffee-button type="danger" plain>按钮</coffee-button>
      <coffee-button type="warning" plain>按钮</coffee-button>
    </div>
    <div class="row">
      <coffee-button>按钮</coffee-button>
      <coffee-button type="primary" round>按钮</coffee-button>
      <coffee-button type="success" round>按钮</coffee-button>
      <coffee-button type="info" round>按钮</coffee-button>
      <coffee-button type="danger" round>按钮</coffee-button>
      <coffee-button type="warning" round>按钮</coffee-button>
    </div>
    <div class="row">
      <coffee-button circle>测</coffee-button>
      <coffee-button type="primary" circle>试</coffee-button>
      <coffee-button type="success" circle>按</coffee-button>
      <coffee-button type="info" circle>钮</coffee-button>
      <coffee-button type="danger" circle>用</coffee-button>
      <coffee-button icon="search" type="warning" circle></coffee-button>
    </div>
    <div class="row">
      <coffee-button disabled>按钮</coffee-button>
      <coffee-button type="primary" disabled>按钮</coffee-button>
      <coffee-button type="success" disabled>按钮</coffee-button>
      <coffee-button type="info" disabled>按钮</coffee-button>
      <coffee-button type="danger" disabled>按钮</coffee-button>
      <coffee-button type="warning" disabled>按钮</coffee-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.row {
  margin-bottom: 20px;
  width: 800px;
  display: flex;
  justify-content: space-evenly;
  margin: 20px auto;
}
</style>
