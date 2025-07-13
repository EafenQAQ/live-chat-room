<template>
  <div id="chatroom">

    <NavBar />
    <div class="chat-container">
      <ChatWindow />
      <ChatForm />
    </div>
  </div>
</template>

<script setup>
import ChatForm from '@/components/ChatForm.vue';
import ChatWindow from '@/components/ChatWindow.vue';
import NavBar from '@/components/NavBar.vue';
import { getUser } from '@/composables/getUser';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

const { user } = getUser()
const router = useRouter()

watch(user, () => {
  if (!user.value) {
    router.push({ name: 'welcome' })
  }
}
)

</script>

<style scoped>
/* 聊天室主容器 */
#chatroom {
  min-height: 100vh;
  
  position: relative;

}

/* 添加装饰性背景元素 */
#chatroom::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 80%, var(--base-color-200) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, var(--secondary-color-200) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, var(--base-color-100) 0%, transparent 50%);
  opacity: 0.3;
  pointer-events: none;
  z-index: 0;
}

/* 聊天容器 */
.chat-container {
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 55rem;
  margin: 5rem auto;
  padding: 2rem 1rem;
  position: relative;
  z-index: 1;

}

/* 响应式设计 */
@media (max-width: 768px) {
  .chat-container {
    max-width: 100%;
    padding: 1rem 0.5rem;
  }

  #chatroom {
    background: linear-gradient(180deg,
        var(--base-color-100) 0%,
        var(--secondary-color-100) 100%);
  }
}

/* 添加聊天室整体动画效果 */
#chatroom {
  animation: fadeIn 0.8s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 为聊天容器添加卡片样式 */
.chat-container {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 2rem;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  overflow: hidden;
}
</style>
