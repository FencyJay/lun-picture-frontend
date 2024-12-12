import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/**
 * 存储用户登录信息
 */
export const UserLoginUserStore = defineStore('loginUser', () => {
  const loginUser = ref<any>({
    username: '未登录',
  })

  async function fetchLoginUser() {
    // todo 后端登录接口待开发，暂时为空
    setTimeout(()=>{
      loginUser.value = {username: "测试登录",id: 1}
    },3000)
  }

  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser
  }


  return { loginUser, fetchLoginUser, setLoginUser }
})
