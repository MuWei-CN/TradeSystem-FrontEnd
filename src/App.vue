<script setup>
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
</script>

<template>
  <div class="full-page">
    <RouterView />
  </div>
</template>

<style scoped>
.full-page {
  width: 100%;
  min-height: 940px;
  height: auto;
  background: linear-gradient(to bottom, #e8f5e9, #c8e6c9); /* Green gradient for sustainability */
  position: relative;
  overflow: hidden;
}

.full-page::before {
  content: '';
  position: absolute;
  top: -100px;
  left: -100px;
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  z-index: 1;
}

.full-page::after {
  content: '';
  position: absolute;
  bottom: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  z-index: 1;
}
</style>
