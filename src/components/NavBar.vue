<template>
  <nav v-if="user" id="NavBar">
    <div class="text-area">
      <p>你好！{{ user.displayName }}</p>
      <p>你的邮箱：{{user.email}}</p>
    </div>
    <button @click="handleClick">
      登出
    </button>

  </nav>
</template>

<script setup>
import { useLogout } from '@/composables/useLogout';
import { getUser } from '@/composables/getUser';
import { useRouter } from 'vue-router';

const { logout, error } = useLogout()
const { user } = getUser()
const router = useRouter();

const handleClick = async () => {
  await logout()
  if (!error.value) {
    console.log('注销成功！')
    router.push({ name: 'welcome' })
  }
}

</script>

<style scoped>
button {
  background-color: var(--error-color);
}

button:hover {
  background-color: hsl(from var(--error-color) h calc(s - 20) calc(l - 20));
}

/* 导航栏基本样式 */
#NavBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  /* 宽度 */
  width: 100%;

  border-bottom: 2px solid var(--base-color-600);

  /* 下阴影 */
  box-shadow: 0px 2rem 2rem 5px var(--base-color-100);
}

.text-area {
  display: flex;

  gap: 0.5rem;
}
</style>
