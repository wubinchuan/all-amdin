import { defineStore } from 'pinia'

import { getEntireRoles, getEntireMenus, getEntireDepartments } from '@/request/main/main'
const usemain = defineStore('main', {
  state: () => ({
    entireRoles: [],
    entireDepartments: [],
    entireMenus: []
  }),
  actions: {
    async fetchEntireDataAction() {
      const rolesResult: any = await getEntireRoles()
      const departmentsResult: any = await getEntireDepartments()
      const menuResult: any = await getEntireMenus()
      console.log(menuResult, 'menuresult')

      // 保存数据
      console.log(departmentsResult, 'ddd')

      this.entireRoles = rolesResult.list
      this.entireDepartments = departmentsResult.list
      this.entireMenus = menuResult.list
    }
  }
})
export default usemain
