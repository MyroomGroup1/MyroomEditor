import Login from '../pages/login';
import Register from '../pages/register';
import UserInfo from '../pages/userInfo';
import ProjectList from '../pages/projectList';
import App from '../pages/app';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

// const routes = [
//   {
//     path: "/",
//     component: Login,
//     exact: false
//   },
//   {
//     path: "/register",
//     component: Register,
//     exact: false
//   }
// ]
//
// export default routes;

// 路由控制文件
class MyRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} /> //路由注册和组件绑定
          <Route path='/register' element={<Register />}/>
          <Route path='/userInfo' element={<UserInfo />}/>
          <Route path='/projectList' element={<ProjectList />} />
          <Route path='/edit' element={<App />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default MyRouter;