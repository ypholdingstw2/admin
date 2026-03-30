<template>
  <div class="profile">
    <h2>個人資料</h2>
    <p>姓名：{{ user.username }}</p>
    <p>信箱：{{ user.email }}</p>
    <button @click="handleLogout">登出</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getUser, logout } from '../utils/auth.js'

const user = ref(getUser())
const router = useRouter()

// 改名成 handleLogout 就不衝突了
function handleLogout() {
  logout()
  router.push('/login')
}
</script>

<style scoped>
.profile { padding:20px; }
button { background:#dc3545; color:white; padding:10px; border:none; border-radius:6px; }
</style>