<template>
  <div class="welcome-page">
    <!-- 载入动画 -->
    <div v-if="isLoading" class="loading-container">
      <div class="loading-spinner">
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
      </div>
      <p class="loading-text">正在载入...</p>
    </div>

    <!-- 主要内容 -->
    <div v-else class="main-content">
      <div class="blank"></div>
      <h1 class="welcome-title">
        欢迎来到 <span class="accent">Live Chat</span>
      </h1>

      <div class="form-container">
        <template v-if="showSignup">
          <SignupForm @signup="gotoChatroom" />
          <div class="des">
            已经有账号？去<span class="toggle" @click="showSignup = !showSignup">登录</span>
          </div>
        </template>
        <template v-else>
          <LoginForm @login="gotoChatroom" />
          <div class="des">
            还没有账号？去<span class="toggle" @click="showSignup = !showSignup">注册</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoginForm from '@/components/LoginForm.vue';
import SignupForm from '@/components/SignupForm.vue';

import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { projectAuth } from '@/firebase/config';

const userState = projectAuth.currentUser
console.log('current user state is :', userState)

const showSignup = ref(false);
const isLoading = ref(true);

const router = useRouter();

// 模拟载入过程
onMounted(() => {
  // 模拟载入时间（1.5秒）
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
});

const gotoChatroom = () => {
  router.push({ name: 'chatroom' })
}
</script>
<style scoped>
/* 页面容器 */
.welcome-page {
  min-height: 100vh;
  background: linear-gradient(135deg,
      var(--base-color-100) 0%,
      var(--secondary-color-100) 50%,
      var(--base-color-200) 100%);
  position: relative;
  overflow: hidden;
}

/* 载入动画容器 */
.loading-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 2rem;
}

/* 载入动画 */
.loading-spinner {
  position: relative;
  width: 80px;
  height: 80px;
}

.spinner-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid transparent;
  border-radius: 50%;
  animation: spin 2s linear infinite;
}

.spinner-ring:nth-child(1) {
  border-top-color: var(--base-color);
  animation-delay: 0s;
}

.spinner-ring:nth-child(2) {
  border-right-color: var(--secondary-color);
  animation-delay: -0.5s;
  width: 70%;
  height: 70%;
  top: 15%;
  left: 15%;
}

.spinner-ring:nth-child(3) {
  border-bottom-color: var(--base-color-400);
  animation-delay: -1s;
  width: 40%;
  height: 40%;
  top: 30%;
  left: 30%;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* 载入文本 */
.loading-text {
  font-size: 1.2rem;
  color: var(--secondary-color-600);
  font-weight: 500;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 0.6;
  }

  50% {
    opacity: 1;
  }
}

/* 主要内容动画 */
.main-content {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 原有样式优化 */
.blank {
  height: 8rem;
}

.welcome-title {
  margin-left: 20%;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  animation: slideInLeft 1s ease-out 0.3s both;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.form-container {
  animation: fadeIn 1s ease-out 0.6s both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.des {
  display: flex;
  justify-content: center;
  margin: 1rem;
}

.toggle {
  color: var(--base-color);
  cursor: pointer;
  transition: all 0.3s ease;
}

.toggle:hover {
  text-decoration: underline;
  color: var(--base-color-600);
}

.accent {
  color: var(--base-color);
  text-shadow: 0 0 10px rgba(66, 211, 146, 0.3);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .welcome-title {
    margin-left: 10%;
    font-size: 2rem;
  }

  .loading-spinner {
    width: 60px;
    height: 60px;
  }

  .loading-text {
    font-size: 1rem;
  }
}
</style>
