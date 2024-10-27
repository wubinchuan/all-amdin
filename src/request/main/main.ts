import { Niureq } from ".."
export function getEntireDepartments() {
    return Niureq.post({
      url: '/department/list'
    })
  }
  
export function getEntireMenus() {
    return Niureq.post({
      url: '/menu/list'
    })
}
export function getEntireRoles() {
  return Niureq.post({
    url: '/role/list'
  })
}