interface Niu {
  pageName: string
  itemlist: any[]
}

const searchConfig: Niu = {
  pageName: 'department',
  itemlist: [
    { type: 'input', label: '用户名', prop: 'name' },
    {
      type: 'input',
      label: '真实名称',
      prop: 'realname'
    },
    {
      type: 'select',
      label: '状态',
      prop: 'enable',

      children: [
        { label: '启动', value: 1 },
        { label: '禁用', value: 0 }
      ]
    },
    {
      type: 'timer',
      prop: 'createAt',
      label: '搜索时间'
    },
    {
      type: 'handle'
    }
  ]
}
export default searchConfig
