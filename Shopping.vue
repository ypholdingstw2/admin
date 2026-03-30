<template>
  <div>
    <h1 class="title">採購清單</h1>
    <div class="card" v-for="item in list" :key="item.shop_id">
      <div>
        <div class="item-name">{{ item.item_name }}</div>
        <div class="item-desc">數量：{{ item.quantity }} {{ item.unit }}</div>
      </div>
      <button class="btn btn-success" style="padding:8px 12px;" @click="done(item)">已購買</button>
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
  alert('已入庫！')
  location.reload()
}
</script>

<style scoped>
.item-name { font-weight:bold; font-size:16px; }
.item-desc { font-size:12px; color:#666; margin-top:4px; }
</style>