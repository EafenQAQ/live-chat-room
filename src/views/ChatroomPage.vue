<template>
  <div id="chatroom">

    <NavBar />

    <ChatForm />
  </div>
</template>

<script setup>
import ChatForm from '@/components/ChatForm.vue';
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

<style lang="scss" scoped></style>
