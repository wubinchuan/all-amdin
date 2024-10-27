import type { RouteRecordRaw } from 'vue-router'
export let firstenum: any = ''
export function maprouter(emunlist: any) {
  const routerlist: RouteRecordRaw[] = []
  const files: Record<string, any> = import.meta.glob('../main/*.ts', {
    eager: true
  })
  for (const item in files) {
    routerlist.push(files[item].default)
  }

  const routelist: any[] = []

  for (const item of emunlist) {
    for (const key of item.children) {
      const route = routerlist.find((item) => {
        return item.path === key.url
      })

      if (route) {
        if (
          !routelist.find((itel) => {
            itel.url === item.url
          })
        ) {
          routelist.push({ path: item.url, redirect: key.url })
        }

        routelist.push(route)
      }
      if (!firstenum && route) {
        firstenum = key
      }
    }
  }
  return routelist
}

export function maprouteToemun(path: string, emunlist: any[]) {
  for (const item of emunlist) {
    const result = item.children.find((item: any) => item.url === path)
    if (result) return result
  }
}
export function mapTombx(path: any, emunlist: any[]) {
  //通过路径查找上一层路径和下一层路径
  const resultlist: any = []
  for (const item of emunlist) {
    for (const childernitem of item.children) {
      if (childernitem.url === path) {
        resultlist.push(
          {
            name: item.name,
            path: item.url
          },
          { name: childernitem.name, path: childernitem.url }
        )
        return resultlist
      }
    }
  }
}
