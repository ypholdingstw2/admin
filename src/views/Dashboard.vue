<template>
  <div class="dashboard">
    <h2>首頁儀表板</h2>
    <div class="card">商品總數：{{ data.total_products }}</div>
    <div class="card">庫存不足：{{ data.low_stock_count }}</div>
    <div class="card">即將過期：{{ data.expire_soon_count }}</div>
    <div class="card">待採購：{{ data.shopping_pending_count }}</div>
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
.dashboard { padding:20px; }
.card { padding:16px; background:#f8f9fa; margin:8px 0; border-radius:8px; }
</style>