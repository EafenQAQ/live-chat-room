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
.chat-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* 宽度 */
  max-width: 50rem;
  margin-top: 5rem;
  margin: 0 auto;
}
</style>
