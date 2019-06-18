import React from "react"
import { Layout,Row,Col,Menu,Icon} from 'antd';
import logo from "static/logo.png";
const {Header} = Layout;
export default class TopNav extends React.Component{
    render(){
        return (
            <Header className="header">
                <Row>
                    <Col span={6}>
                        <div className="logo" >
                            <img src={logo}/>
                        </div>
                    </Col>
                    <Col span={16}>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">招生系统</Menu.Item>
                            <Menu.Item key="2">教学管理</Menu.Item>
                            <Menu.Item key="3">工单系统</Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={2}>
                        <Menu
                            mode="inline"
                            className="userInfo"
                        >
                            <Menu.Item key="setting:1">退出登陆</Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Header>
        )
    }
}