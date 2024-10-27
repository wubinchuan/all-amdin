import { Niureq } from '..'

export function accoutlogin(user: any) {
  return Niureq.post({
    url: '/login',
    data: user
  })
}
export function getuserinfo(): any {
  return Niureq.get({
    url: '/users/1'
  })
}

export function getusermenu(id:number): any {
  return Niureq.get({
    url: `/role/${id}/menu`
  })
}
