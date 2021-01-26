import React, { Component } from 'react'
import './app.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {Switch,NavLink,Route} from 'react-router-dom';
import About from './view/about';
import Home from './view/home';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class APP extends Component {
    render() {
        return (
            <div>
           <Layout>
    <Header className="header">
     header
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="about">
            <Menu.Item key="1">
                <NavLink to='/about' >about</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="home">
            <Menu.Item key="5">
            <NavLink to='/home' activeClassName='activeClass' >home</NavLink>
            </Menu.Item>
 

          </SubMenu>
        </Menu>
      </Sider>
      {/* 导航栏 */}
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item> */}
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        ><Switch>
            <Route path='/about' component={About}></Route>
            <Route path='/home' component={Home}></Route>
        </Switch>
         
        </Content>
      </Layout>
    </Layout>
  </Layout>,
            </div>
        )
    }
}
export default APP