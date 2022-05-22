import React from 'react';
import './style.css';
import ParticlesBg from 'particles-bg'
import {login} from '../../api/account'
import {BrowserRouter as Routes , Route, Link} from "react-router-dom";
import Register from '../register';


interface account {
  username: String,
  password: String
}
class Login extends React.Component<any,account>{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  submit = () => {
    login({username:this.state.username,password:this.state.password})
      .then(res => {
        if(res.code === 0)
        {
          alert("登陆成功！")
        }
        else
        {
          alert("用户名或密码错误！")
        }
      })
  }

  changeUsername = e => {
      this.setState({
        username:e.target.value
      })
  }
  changePassword = e => {
    this.setState({
      password:e.target.value
    })
  }

  render() {
    return (
      <div className="page">
        <ParticlesBg type="cobweb" bg={true} color={"#87ceeb"} />
        <div className="container">
          <div className="front_text">MyRoom 系统</div>
          <input className="input_item"  placeholder="账户" onChange={this.changeUsername}/>
          <input className="input_item"  type={'password'} placeholder="密码" onChange={this.changePassword}/>
          <button className="submit_btn" onClick={this.submit} >登录</button>
          <Link to='/register'>
            <div className="info_text" >还没有账号？去注册</div>
          </Link>
        </div>
      </div>
    )
  }

}

export default Login;