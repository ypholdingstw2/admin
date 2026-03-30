<template>
  <div>
    <h1 class="title">庫存清單</h1>
    <div class="card" v-for="item in list" :key="item.inventory_id">
      <div class="item-name">{{ item.product_name }}</div>
      <div class="item-qty">{{ item.quantity }} {{ item.unit }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { inventoryList } from '../api/inventory.js'
const list = ref([])
onMounted(async () => {
  const res = await inventoryList()
  list.value = res.data
})
</script>

<style scoped>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-name { font-size:16px; font-weight:bold; }
.item-qty { color:#4263e6; font-weight:bold; }
</style>