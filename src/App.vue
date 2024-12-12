<template>
  <div id="#app">
    <BasicLayout />
  </div>
</template>

<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue'
import { healthUsingGet } from '@/api/mainController.ts'
import { UserLoginUserStore } from '@/stores/userLoginUserStore.ts'

const loginUserStore = UserLoginUserStore()
loginUserStore.fetchLoginUser()

healthUsingGet().then((res) => {
  console.log(res.data.data)
})
</script>

<style scoped></style>
