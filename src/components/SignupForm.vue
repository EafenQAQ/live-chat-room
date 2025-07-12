<template>
  <div id="signup-form">
    <form @submit.prevent="handleSubmit">
      <h2 class="title">注册账号</h2>
      <input type="text" placeholder="用户名" v-model="displayName" />
      <input type="email" placeholder="邮箱" v-model="email" />
      <input type="password" placeholder="密码" v-model="password" />
      <input type="password" placeholder="确认密码" v-model="confirmPassword">
      <div class="error">{{ error }}</div>
      <button>注册</button>
    </form>
  </div>
</template>

<script setup>
import { useSignup } from '@/composables/useSignup';
import { ref } from 'vue';

const emit = defineEmits(['signup'])

const displayName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const { signup, error } = useSignup()

const handleSubmit = async () => {
  if (password.value !== confirmPassword.value) {
    console.log('密码不一致')
    error.value = '密码不一致'
    return
  }
  await signup(email.value, password.value, displayName.value)
  if (!error.value) {
    console.log('注册成功！')
    emit('signup')
  }
}

</script>

<style scoped>
.title {
  font-size: 2rem;
  margin: 0 auto;
  margin-bottom: 1rem;

}

#signup-form {
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* 宽度 */
  width: 30rem;
}

/* 输入框样式 */
input {
  font-size: 1rem;
  padding: 1.5rem;
  border: 1px solid var(--secondary-color);
  border-radius: 2rem;
  outline: none;
  transition: all 0.3s ease;
}

input:focus {
  border-color: var(--base-color-500);
}

/* 按钮样式 */
button {
  font-size: 1.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--secondary-color-300);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background-color: var(--secondary-color-500);
}

.des {
  font-size: 1rem;
  margin: 0 auto;
  margin-bottom: 1rem;
}
</style>
