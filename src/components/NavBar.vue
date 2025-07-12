<template>
  <nav v-if="user" id="NavBar">
    <div class="text-area">
      <p class="greeting">你好！<span>{{ user.displayName }}</span></p>
      <p class="email-text">{{ user.email }}</p>
    </div>
    <div>
      <h2>聊天室</h2>
    </div>
    <button @click="handleClick">
      登出
    </button>

  </nav>
</template>

<script setup>
import { useLogout } from '@/composables/useLogout';
import { getUser } from '@/composables/getUser';

const { logout, error } = useLogout()
const { user } = getUser()


const handleClick = async () => {
  await logout()
  if (!error.value) {
    console.log('注销成功！')

  }
}

</script>

<style scoped>
span {
  color: var(--base-color);
  font-weight: bold;
}

/* 置顶 */
#NavBar {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
}

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
  padding: 0 2rem;
  /* 宽度 */
  width: 100%;

  border-bottom: 2px solid var(--base-color-600);

  /* 下阴影 */
  box-shadow: 0px 2rem 2rem 5px var(--base-color-100);
}

.text-area {
  display: flex;
  flex-direction: column;
}
/* 清除margin */
p {
  margin: 0;
}
.email-text {
  font-size: 0.8rem;
  color: #8e8e8e;
}
.greeting {
  font-size: 1.2rem;
}
</style>
