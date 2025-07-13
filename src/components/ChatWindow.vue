<template>
  <div id="ChatWindow">
    <p v-if="document">ChatWindow</p>
  </div>
</template>

<script setup>

</script>

<style scoped>
#ChatWindow {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  width: 100%;
  height: 35rem;
  background: linear-gradient(145deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.7) 100%);

  border-radius: 2rem 2rem 0 0;
  position: relative;
  overflow-y: auto;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.05);
}

/* 添加滚动条样式 */
#ChatWindow::-webkit-scrollbar {
  width: 8px;
}

#ChatWindow::-webkit-scrollbar-track {
  background: var(--base-color-100);
  border-radius: 4px;
}

#ChatWindow::-webkit-scrollbar-thumb {
  background: var(--base-color-400);
  border-radius: 4px;
}

#ChatWindow::-webkit-scrollbar-thumb:hover {
  background: var(--base-color-500);
}

/* 占位文本样式 */
#ChatWindow p {
  color: var(--secondary-color-400);
  font-size: 1.2rem;
  text-align: center;
  margin: auto;
  opacity: 0.7;
  font-weight: 500;
}

/* 添加装饰性元素 */
#ChatWindow::before {
  content: '';
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 3rem;
  height: 4px;
  background: var(--base-color-400);
  border-radius: 2px;
  opacity: 0.3;
}

/* 响应式设计 */
@media (max-width: 768px) {
  #ChatWindow {
    height: 25rem;
    padding: 1.5rem;
    border-radius: 1.5rem 1.5rem 0 0;
  }
}
</style>
