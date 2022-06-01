import React from 'react';
import './style.css';
import ParticlesBg from 'particles-bg'
import {login} from '../../api/account'
import { Link, useNavigate } from 'react-router-dom';

export default function Login(){
  let username = ""
  let password = ""
  const navigate = useNavigate()

  function submit (){
    if(username === "" || password === "")
    {
      alert("请填写用户名或密码")
      return
    }
    login({username:username,password:password})
      .then(res => {
        if(res.code === 0)
        {
          alert("登陆成功！")
          window.localStorage.setItem("username",username)
          navigate("/projectList")
        }
        else
        {
          alert("用户名或密码错误！")
        }
      })
  }

  function changeUsername (e) {
    username = e.target.value
  }
  function changePassword (e) {
    password = e.target.value
  }

    return (
      <div className="page">
        <ParticlesBg type="cobweb" bg={true} color={"#87ceeb"}/>
        <div className="login_container">
          <div className="front_text">MyRoom 系统</div>
          <input className="input_item"  placeholder="账户" onChange={changeUsername}/>
          <input className="input_item"  type={'password'} placeholder="密码" onChange={changePassword}/>
          <button className="submit_btn" onClick={submit} >登录</button>
          <Link to='/register'>
            <div className="info_text" >还没有账号？去注册</div>
          </Link>
        </div>
      </div>
    )


}
