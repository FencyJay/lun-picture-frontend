<template>
  <div id="#basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header"><GlobalHeader /></a-layout-header>
      <a-layout-content class="content"><router-view /></a-layout-content>
      <a-layout-footer class="footer"><a href="#" target="_blank">期待友链</a></a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from '@/components/globalHeader.vue'
</script>

<style scoped>
.header{
  padding-inline: 20px;
  background: white;
  color: unset;
  margin-bottom: 16px;
}

.content{
  padding: 20px;
  background: linear-gradient(to right, #efefef,#fff);
  margin-bottom: 64px;
}
.footer{
  background: #efefef;
  padding: 16px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
}

</style>
