import {ref, computed} from "vue"
import {useStorage, StorageSerializers} from '@vueuse/core'
import {ElMessage} from 'element-plus'

const user = useStorage('user', null, undefined, {
  serializer: StorageSerializers.object
})

export const useUser = () => {
  const loginModel = ref({
    username: "123",
    password: "123",
  })

  function login() {
    user.value = {
      username: loginModel.value.username,
      password: loginModel.value.password,
    }
    ElMessage.success('登录成功')
  }

  const loggedIn = computed(() => !!user.value)

  function logout() {
    user.value = null
    ElMessage.success('退出成功')
  }


  return {loginModel, login, loggedIn, user, logout}
}
