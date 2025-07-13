<template>
  <div id="ChatForm" class="chat-form">
    <form>
      <textarea v-model="message" @keypress.enter.prevent="handleSubmit" placeholder="输入新消息"></textarea>
      <span class="error">{{ error }}</span>
    </form>

  </div>
</template>

<script setup>
import { getUser } from '@/composables/getUser';
import useCollection from '@/composables/useCollection';
import { timeStamp } from '@/firebase/config';
import { ref } from 'vue';

const message = ref('')
const { user } = getUser()
const { addDoc, error } = useCollection('message')

const handleSubmit = async () => {
  const chat = {
    name: user.value.displayName,
    createdAt: timeStamp(),
    message: message.value,

  }

  await addDoc(chat)

  if (!error.value) {
    message.value = ''

  }
}


</script>

<style scoped>
form,
textarea {
  width: 100%;
}

.chat-form {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(145deg,
      rgba(255, 255, 255, 0.95) 0%,
      rgba(255, 255, 255, 0.85) 100%);

  border-top: none;
  border-radius: 0 0 2rem 2rem;
  padding: 1.5rem 2rem;
  position: relative;
}

form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
}

textarea {
  font-size: 1rem;
  padding: 1.5rem;
  border: 2px dashed var(--secondary-color-200);
  border-radius: 1.5rem;
  outline: none;
  transition: all 0.3s ease;
  resize: none;
  min-height: 8rem;
  max-height: 15rem;
  background: rgba(255, 255, 255, 0.9);
  font-family: inherit;
  line-height: 1.5;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.05);
}

textarea:focus {
  border-color: var(--base-color-400);
  box-shadow:
    inset 0 2px 5px rgba(0, 0, 0, 0.05),
    0 0 0 3px rgba(66, 211, 146, 0.1);
  transform: translateY(-1px);
}

textarea::placeholder {
  color: var(--secondary-color-300);
  opacity: 0.8;
}

/* 添加发送按钮样式提示 */
.chat-form::after {
  content: 'Press Enter to send';
  position: absolute;
  bottom: 0.5rem;
  right: 1rem;
  font-size: 0.75rem;
  color: var(--secondary-color-400);
  opacity: 0.6;
  pointer-events: none;
}

/* 错误信息样式优化 */
.error {
  color: var(--error-color);
  font-size: 0.9rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: rgba(249, 86, 86, 0.1);
  border-radius: 0.5rem;
  border-left: 3px solid var(--error-color);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chat-form {
    padding: 1rem;
    border-radius: 0 0 1.5rem 1.5rem;
  }

  textarea {
    min-height: 6rem;
    padding: 1rem;
    border-radius: 1rem;
  }

  .chat-form::after {
    font-size: 0.7rem;
    bottom: 0.3rem;
    right: 0.8rem;
  }
}
</style>
