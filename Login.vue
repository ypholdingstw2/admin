<template>
  <div class="login-page">
    <h1 class="title">家庭庫存系統</h1>
    <p class="subtitle">Manage your home easily</p>

    <div class="form-box">
      <input v-model="form.email" class="input" placeholder="電子信箱" />
      <input v-model="form.password" class="input" type="password" placeholder="密碼" />
      <button class="btn btn-primary" @click="doLogin">登入</button>
      <p class="link" @click="$router.push('/register')">還沒有帳號？立即註冊</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../api/auth.js'
import { setToken, setUser } from '../utils/auth.js'

const router = useRouter()
const form = ref({ email: '', password: '' })

async function doLogin() {
  const res = await login(form.value)
  setToken(res.data.token)
  setUser(res.data)
  router.push('/dashboard')
}
</script>

<style scoped>
.login-page {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.subtitle {
  color: #666;
  margin-bottom: 40px;
}

.form-box {
  width: 100%;
}

.link {
  text-align: center;
  color: #4263e6;
  margin-top: 16px;
  font-size: 14px;
}
</style>