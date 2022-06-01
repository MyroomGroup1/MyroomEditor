import React from 'react';
import './style.css';
import ParticlesBg from 'particles-bg'
import {register} from '../../api/account'
import { Link, useNavigate } from 'react-router-dom';


export default function Register(){
  let username = ""
  let password = ""
  const navigate = useNavigate()

  function submit () {
    if(username === "" || password === "")
    {
      alert("请填写用户名或密码")
      return
    }
    register({username:username,password:password})
      .then(res => {
        if(res.code === 0)
        {
          alert("登陆成功！")
          navigate("/")
        }
        else
        {
          alert("用户名或密码错误！")
        }
      })
      .catch(error => {
        alert(error.response.status+":"+error.response.data)
      })
  }

  function changeUsername (e ) {
      username = e.target.value
  }
  function changePassword (e) {
      password = e.target.value
  }
    return (
      <div className="page">
        <ParticlesBg type="cobweb" bg={true} color={"#87ceeb"} />
        <div className="register_container">
          <div className="front_text">MyRoom 系统</div>
          <input className="input_item"  placeholder="账户" onChange={changeUsername}/>
          <input className="input_item"  type={'password'} placeholder="密码" onChange={changePassword}/>
          <button className="submit_btn" onClick={submit} >注册</button>
          <Link to='/'>
            <div className="info_text" >已有账号？去登陆</div>
          </Link>
        </div>
      </div>
    )

}
