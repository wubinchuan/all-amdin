import { deleteUserById, editUserData, newUserData, postUsersListData } from '@/request/user/user'
import { defineStore } from 'pinia'

const useUser = defineStore('user', {
  state: (): any => ({
    userlist: [],
    totalcount: 0
  }),
  actions: {
    async fetchuserlist(data: any) {
      try {
        const userlist: any = await postUsersListData(data)
        console.log(userlist)

        this.userlist = userlist.list
        this.totalcount = userlist.totalCount
      } catch (err) {
        console.log('出现问题', err)
      }
    },
    async deleteuser(id: number) {
      const res = await deleteUserById(id)
      this.fetchuserlist({ offset: 0, size: 10 })
    },
    async updateuser(id: number, data: object) {
      const res = await editUserData(id, data)
      this.fetchuserlist({ offset: 0, size: 10 })
    },
    async createuser(userdata: object) {
      console.log(userdata, 'yyy')
      const res = await newUserData(userdata)
      console.log(res, 'yyy')

      this.fetchuserlist({ offset: 0, size: 10 })
    }
  }
})
export default useUser
