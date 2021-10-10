import axios from "axios";
// 不要用全局的 

// 法一：好像是它最终的
export function request(config) {
  // 1、创建axios实例
  const instance = axios.create({
    baseURL: '123.207.32.32:8000',
    timeout: 5000 // 我有自己对应的时间
  })

  // 2、axios拦截器
  // 2.1 请求拦截
  instance.interceptors.request.use(config => {
    // 请求成功来这里
    
    // 比如 config 中的一些信息不符合服务器的要求
    // 比如每次发送网络请求时，都希望在界面中显示一个请求的图标
    // 比如某些网络请求（比如登录 token），是必须携带一些特殊的信息


    // 你把config拦截下来了，你要把它return出去，不然main.js请求会触发catch 会请求失败 
    return config
  }, err => {
    // 请求失败来这里
    console.log(err) //一般不会走到这里
  })

  // 2.2 相应拦截
  instance.interceptors.response.use(result => {
    return result.data
  }, err => {
    console.log(err)
  })



  // 发送在真正的网络请求
  // 因为axios本身就返回promise，没有必要return new Promise
  return instance(config) 

}

// 法二
// export function request(config, success, failure) {
//   const instance = axios.create({
//     baseURL: '123.207.32.32:8000',
//     timeout: 5000
//   })
//   instance(config).then(res =>{
//     success(res)
//   }).catch(err =>{
//     failure(err)
//   })
// }


// 看你是要拦截全局还是实例