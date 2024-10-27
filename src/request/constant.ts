let BASEURL: string = 'http://codercba.com:5000'
const TIMEOUT: number = 50000
//生产环境
if (import.meta.env.MODE === 'production') {
  BASEURL = 'http://codercba.com:5000'
} else {
  BASEURL = 'http://codercba.com:5000'
}
console.log(import.meta.env.DEV) //开发
console.log(import.meta.env.PROD) //生产
console.log(import.meta.env.VITE_NAME) //这里面有.env的变量,配置文件后缀加上.local在上传git的时候会忽略

export { BASEURL, TIMEOUT }
