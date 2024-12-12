<template>
  <div id="#globalHeader">
    <a-row :wrap="false">
      <a-col flex="200px">
        <router-link to="/">
          <div class="title-bar">
            <img class="logo" src="../assets/logo.png" alt="logo" />
            <div class="title">伦图库</div>
          </div>
        </router-link>
      </a-col>
      <a-col flex="auto">
        <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" @click="doMenuClick"/>
      </a-col>
      <a-col flex="120px">
        <div class="user-login-status">
          <div v-if="loginUserStore.loginUser.id">
            {{loginUserStore.loginUser.username ?? "无名"}}
          </div>
          <div v-else>
            <a-button type="primary" href="/user/login">登录</a-button>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts" setup>
import { h, ref } from 'vue'
import { HomeOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue'
import { MenuProps } from 'ant-design-vue'
import { useRoute, useRouter } from 'vue-router'
import { UserLoginUserStore } from '@/stores/userLoginUserStore.ts'

const loginUserStore = UserLoginUserStore()

const current = ref<string[]>()
const items = ref<MenuProps['items']>([
  {
    key: '/',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页',
  },
  {
    key: '/about',
    label: '关于',
    title: '关于',
  },
  {
    key: '/other',
    label: h('a', { href: '#', target: '_blank' }, '外部页面'),
    title: '外部页面',
  },
])

const router = useRouter()
const route = useRoute()

//路由跳转事件
const doMenuClick = ({  key  })=>{
  router.push({
    path: key,
  })
}
//获取 url 地址给current,为了高亮菜单栏
router.afterEach((to,from,next)=>{
  current.value = [to.path];
})

</script>
<style scoped>
.logo{
  width: 32px;
}

.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: black;
  font-size: 18px;
  margin-left: 16px;
}
</style>
