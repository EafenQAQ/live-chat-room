<template>
  <div>
    <h1>
      Welcome!

    </h1>
    <template v-if="showSignup">
      <SignupForm />
      <div class="des">
        已经有账号？去<span class="toggle" @click="showSignup = !showSignup">登录</span>
      </div>
    </template>
    <template v-else>

      <LoginForm />
      <div class="des">
        还没有账号？去<span class="toggle" @click="showSignup = !showSignup">注册</span>
      </div>
    </template>
  </div>

</template>

<script setup>
import LoginForm from '@/components/LoginForm.vue';
import SignupForm from '@/components/SignupForm.vue';
import { ref } from 'vue';

const showSignup = ref(false);

</script>
<style scoped>
.des {
  display: flex;
  justify-content: center;
  margin: 1rem;
}

.toggle {
  color: var(--base-color);
  cursor: pointer;
}

.toggle:hover {
  text-decoration: underline;
}
</style>
