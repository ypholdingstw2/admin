<template>
  <div class="product">
    <h2>商品管理</h2>
    <div v-for="item in list" :key="item.product_id">
      {{ item.product_name }} ({{ item.unit }})
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { productList } from '../api/product.js'
const list = ref([])

onMounted(async () => {
  const res = await productList()
  list.value = res.data
})
</script>

<style scoped>
.product { padding:20px; }
</style>