<script setup lang="ts">
const value = ref(false)

function mockFn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
      LewMessage.success('发送成功')
    }, 1000)
  })
}
function change() {
}
</script>

<template>
  <lew-flex direction="y" x="start" gap="20px">
    <lew-flex x="start">
      <label>常规</label> <lew-switch v-model="value" @change="change" />
    </lew-flex>
    <lew-flex x="start">
      <label>异步</label>
      <lew-switch v-model="value" :request="mockFn" @change="change" />
    </lew-flex>
  </lew-flex>
</template>
