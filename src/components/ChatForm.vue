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
    createAt: timeStamp(),
    message: message.value,

  }

  await addDoc(chat)

  if (!error.value) {
    message.value = ''

  }
}


</script>

<style scoped>
.chat-form {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  /* 宽度 */
  width: 100%;
  margin-top: 5rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;

}

textarea {
  font-size: 1rem;
  padding: 1.5rem;
  border: 1px solid var(--secondary-color);
  border-radius: 2rem;
  outline: none;
  transition: all 0.3s ease;
  resize: none;
  min-height: 10rem;
  max-height: 20rem;
  width: 40rem;
  max-width: 50rem;

}
</style>
