import React, { Fragment } from 'react'
import { Menu, Row, Col } from 'antd'
import './index.scss'
import Logo from '@static/logo.png'


const { SubMenu } = Menu;
const HeaderUser = () => {
    return (
        <Fragment>
            <Row>
                <Col span={3}>
                <img className='logo' src={Logo} alt="logo" />
                </Col>
                <Col span={4} offset={3}>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
                className='user'
            >
               
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
            </Menu>
            </Col>
            <Col span={2} offset={12}>
            <Menu 
                 theme="dark"
                 mode="horizontal"
                 defaultSelectedKeys={['1']}
                 style={{ lineHeight: '64px' }}
                 className='user'
            >
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">

                            用户信息
                        </span>
                    }
                >
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>

            </Menu>
            </Col>
            </Row>
        </Fragment>

    )
}


export default HeaderUser