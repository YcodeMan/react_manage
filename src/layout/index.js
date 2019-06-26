import React, { Fragment,useState } from 'react'
import HeaderMsg from './Header'

import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const {  Sider } = Layout;

const LayoutComponent = ({children}) => {
  
 const [collaps,setCollapsed] = useState({
  collapsed: false,
})
 const onCollapse = collapsed => {
    setCollapsed({
      collapsed
    })
  }
  return (
  <Fragment>
    <Layout>
        <HeaderMsg/>
      <Layout>
      <Sider 
        style={{ minHeight: '100vh' }}
         collapsible collapsed={collaps.collapsed} onCollapse={onCollapse}
       >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
           
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="home" />
                  首页
            </span>
              }
            >
              <SubMenu key="sub1_1"
              title={
                <span>
                  <Icon type="user" />
                  设置
                </span>
              }>
                  
                  <Menu.Item key="sub1_1_1">布局</Menu.Item>
                  <Menu.Item key="sub1_1_2">换肤</Menu.Item>
              </SubMenu>
              <Menu.Item key="2">option2</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="laptop" />
                  UI
            </span>
              }
            >
              <Menu.Item key="5">Button</Menu.Item>
              
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 44px 24px' }}>  
          {
             children 
          }
        </Layout>
      </Layout>
    </Layout>,
  
    </Fragment>

  )
}

  



export default LayoutComponent