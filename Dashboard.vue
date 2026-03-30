<template>
  <div>
    <h1 class="title">首頁儀表板</h1>
    <div class="card-row">
      <div class="card card-sm">
        <h3>商品總數</h3>
        <h2>{{ data.total_products }}</h2>
      </div>
      <div class="card card-sm">
        <h3>庫存不足</h3>
        <h2>{{ data.low_stock_count }}</h2>
      </div>
    </div>
    <div class="card-row">
      <div class="card card-sm">
        <h3>即將過期</h3>
        <h2>{{ data.expire_soon_count }}</h2>
      </div>
      <div class="card card-sm">
        <h3>待採購</h3>
        <h2>{{ data.shopping_pending_count }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { dashboard } from '../api/dashboard.js'
const data = ref({})
onMounted(async () => {
  const res = await dashboard()
  data.value = res.data
})
</script>

<style scoped>
.card-row {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
.card-sm {
  flex: 1;
  text-align: center;
  padding: 20px 10px;
}
h3 { color: #666; font-size:14px; margin-bottom:6px; }
h2 { color:#222; font-size:24px; font-weight:bold; }
</style>