<template>
  <div class="inventory">
    <h2>庫存清單</h2>
    <div v-for="item in list" :key="item.inventory_id">
      {{ item.product_name }}　{{ item.quantity }} {{ item.unit }}
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
.inventory { padding:20px; }
</style>