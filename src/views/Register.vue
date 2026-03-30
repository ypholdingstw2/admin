<template>
  <div class="register">
    <h2>註冊家庭</h2>
    <input v-model="form.family_name" placeholder="家庭名稱" />
    <input v-model="form.username" placeholder="你的名字" />
    <input v-model="form.email" placeholder="信箱" />
    <input v-model="form.password" type="password" placeholder="密碼" />
    <button @click="doRegister">註冊</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { register } from '../api/auth.js'

const router = useRouter()
const form = ref({
  family_name: '',
  username: '',
  email: '',
  password: ''
})

async function doRegister() {
  await register(form.value)
  router.push('/login')
}
</script>

<style scoped>
.register { padding:20px; }
input { width:100%; margin:8px 0; padding:12px; }
button { width:100%; padding:12px; background:#28a745; color:white; border:none; border-radius:6px; }
</style>