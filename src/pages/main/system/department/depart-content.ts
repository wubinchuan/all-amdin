const contentConfig = {
  pageName: 'department',
  headertitle: '部门管理',

  itemlist: [
    {
      type: 'selection'
    },
    {
      type: 'index'
    },
    {
      prop: 'name',
      label: '姓名'
    },
    {
      prop: 'cellphone',
      label: '电话号码'
    },
    {
      prop: 'enable',
      label: '状态'
    },
    {
      prop: 'createAt',
      label: '创建时间'
    },
    {
      prop: 'updateAt',
      label: '修改时间'
    }
  ]
}
export default contentConfig
