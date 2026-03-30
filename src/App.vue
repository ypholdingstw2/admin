<template>
  <div class="app-container">
    <div class="page-content">
      <router-view />
    </div>

    <!-- 底部導航欄 -->
    <div class="tabbar" v-if="$route.meta.showTabbar">
      <div class="tab-item" @click="$router.push('/dashboard')">
        <span :class="$route.path === '/dashboard' ? 'active' : ''">首頁</span>
      </div>
      <div class="tab-item" @click="$router.push('/inventory')">
        <span :class="$route.path === '/inventory' ? 'active' : ''">庫存</span>
      </div>
      <div class="tab-item" @click="$router.push('/shopping')">
        <span :class="$route.path === '/shopping' ? 'active' : ''">採購</span>
      </div>
      <div class="tab-item" @click="$router.push('/profile')">
        <span :class="$route.path === '/profile' ? 'active' : ''">我的</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

body {
  background-color: #f7f8fa;
  padding-bottom: 60px;
}

.app-container {
  max-width: 480px;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
}

.page-content {
  padding: 20px;
}

/* 底部導航欄 */
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #eee;
  z-index: 999;
  max-width: 480px;
  margin: 0 auto;
}

.tab-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 14px;
}

.tab-item span {
  color: #666;
}

.tab-item span.active {
  color: #4263e6;
  font-weight: bold;
}

/* 通用按鈕 */
.btn {
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
}

.btn-primary {
  background: linear-gradient(90deg, #4263e6, #5c7cfa);
  color: white;
}

.btn-success {
  background: linear-gradient(90deg, #00b894, #00cec9);
  color: white;
}

.btn-danger {
  background: linear-gradient(90deg, #ff4757, #ff6b6b);
  color: white;
}

/* 卡片 */
.card {
  background: white;
  border-radius: 16px;
  padding: 16px;
  margin: 10px 0;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}

/* 輸入框 */
.input {
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid #eee;
  margin: 8px 0;
  font-size: 16px;
  background: white;
}

.input:focus {
  outline: none;
  border-color: #4263e6;
}

/* 標題 */
.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #222;
}
</style>