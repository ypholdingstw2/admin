<template>
  <div class="login">
    <h2>家庭庫存登入</h2>
    <input v-model="form.email" type="email" placeholder="輸入信箱" />
    <input v-model="form.password" type="password" placeholder="輸入密碼" />
    <button @click="doLogin">登入</button>
    <p class="link" @click="$router.push('/register')">沒有帳號？前往註冊</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../api/auth.js'
import { setToken, setUser } from '../utils/auth.js'

const router = useRouter()
const form = ref({
  email: '',
  password: ''
})

async function doLogin() {
  const res = await login(form.value)
  setToken(res.data.token)
  setUser(res.data)
  router.push('/dashboard')
}
</script>

<style scoped>
.login { padding: 20px; }
input { width:100%; margin:8px 0; padding:12px; }
button { width:100%; padding:12px; background:#007bff; color:white; border:none; border-radius:6px; }
</style>