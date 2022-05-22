import axios from 'axios';


/**
 * 用户登陆系统
 * @param payload username:账户名称 password:密码
 * @returns {Promise<AxiosResponse<any>>}
 */
export const login = payload => {
  const {username,password} = payload;
  return axios.post(`/api/login`,{username,password})
    .then(res => {
      return res.data
    })
}


/**
 * 用户注册系统
 * @param payload username:账户名称 password:密码
 * @returns {Promise<AxiosResponse<any>>}
 */
export const register = payload => {
  const {username,password} = payload;
  return axios.post(`/api/register`,{username,password})
    .then(res => {
      return res.data
    })
}


/**
 * 用户修改个人信息
 * @param payload username:账户名称 password:密码
 * @returns {Promise<AxiosResponse<any>>}
 */
export const changeInfo = payload => {
  const {username,password} = payload;
  return axios.post(`/api/changeInfo`,{username,password})
    .then(res => {
      return res.data
    })
}