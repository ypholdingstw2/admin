<template>
  <div class="shopping">
    <h2>採購清單</h2>
    <div v-for="item in list" :key="item.shop_id">
      {{ item.item_name }} x {{ item.quantity }}
      <button @click="done(item)">已購買</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { shoppingList, purchased } from '../api/shopping.js'
const list = ref([])

onMounted(async () => {
  const res = await shoppingList('pending')
  list.value = res.data
})

async function done(item) {
  await purchased({ shop_id: item.shop_id })
  alert('已標記為已購買，並自動入庫！')
  location.reload()
}
</script>

<style scoped>
.shopping { padding:20px; }
button { margin-left:10px; background:#28a745; color:white; padding:6px; border:none; border-radius:4px; }
</style>