import { accoutlogin, getuserinfo, getusermenu } from '@/request/login/login'

import { defineStore } from 'pinia'
import { maprouter } from '@/utils/maprouterchild'
import useroute from '@/router'
import usemain from '../main/main'
interface Niu {
  token: string
}
const useLogin = defineStore('login', {
  state: (): any => ({
    token: localStorage.getItem('token') ?? '',
    name: '',
    id: '',
    userInfo: {},
    useremun: []
  }),
  actions: {
    async fetchuserlongin(userinfo: { name: string; password: string }) {
      const userinfores: any = await accoutlogin(userinfo)
      this.token = userinfores.token
      this.id = userinfores.id
      this.name = userinfores.name
      localStorage.setItem('token', userinfores.token)
      const res = await getuserinfo()
      const emunlist = await getusermenu(1)
      this.useremun = emunlist
      this.userInfo = res
      localStorage.setItem('userinfo', JSON.stringify(res))
      localStorage.setItem('emunlist', JSON.stringify(emunlist))
      //拿到菜单列表，动态添加路由
      const routelist = maprouter(emunlist)
      routelist.forEach((item) => useroute.addRoute('main', item))
      return true
    },
    refreshloding() {
      const userinfo = localStorage.getItem('userinfo')
      const token = localStorage.getItem('token')
      const emunlist = JSON.parse(localStorage.getItem('emunlist') as string)
      if (token && userinfo) {
        const mainstore=usemain()
        mainstore.fetchEntireDataAction()
        ;(this.token = token), (this.useremun = emunlist)
        this.userinfo = userinfo
        const routelist = maprouter(emunlist)
        routelist.forEach((item) => useroute.addRoute('main', item))
      }
    }
  }
})
export default useLogin
