<template>
  <div>
    <h1 class="title">個人中心</h1>
    <div class="card">
      <div class="info-item">
        <label>使用者名稱</label>
        <span>{{ user.username }}</span>
      </div>
      <div class="info-item">
        <label>電子信箱</label>
        <span>{{ user.email }}</span>
      </div>
    </div>
    <button class="btn btn-danger" style="margin-top:30px;" @click="handleLogout">登出系統</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getUser, logout } from '../utils/auth.js'
const user = ref(getUser())
const router = useRouter()

function handleLogout() {
  logout()
  router.push('/login')
}
</script>

<style scoped>
.info-item {
  display: flex;
  justify-content: space-between;
  padding: 14px 0;
  border-bottom: 1px solid #f0f0f0;
}
.info-item:last-child { border-bottom: none; }
label { color:#666; }
span { font-weight:bold; }
</style>