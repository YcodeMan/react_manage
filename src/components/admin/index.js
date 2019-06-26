import React, { Fragment } from 'react'

import { Layout, Breadcrumb } from 'antd';
import LayoutComponent from '@layout'


const {  Content } = Layout;

const Admin = () => {
  
 
  return (
  <Fragment>      
    <LayoutComponent>

        <Layout style={{ padding: '0 44px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
       </Content>
        </Layout>
      </LayoutComponent>
    </Fragment>

  )
}

  



export default Admin