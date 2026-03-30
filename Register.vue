<template>
  <div class="register-page">
    <h1 class="title">建立家庭帳號</h1>
    <div class="form-box">
      <input v-model="form.family_name" class="input" placeholder="家庭名稱" />
      <input v-model="form.username" class="input" placeholder="你的姓名" />
      <input v-model="form.email" class="input" placeholder="電子信箱" />
      <input v-model="form.password" class="input" type="password" placeholder="密碼" />
      <button class="btn btn-primary" @click="doRegister">註冊</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { register } from '../api/auth.js'
const router = useRouter()
const form = ref({ family_name: '', username: '', email: '', password: '' })

async function doRegister() {
  await register(form.value)
  router.push('/login')
}
</script>

<style scoped>
.register-page {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
}
.form-box { width:100%; }
</style>