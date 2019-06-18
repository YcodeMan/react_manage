import React from "react"
import { Layout} from 'antd';
import SliderNav from "common/sliderNav"
import TopNav from "common/topNav"
import "./index.css";
const { Content, Sider } = Layout;
export default class LayoutCom extends React.Component{
    render(){
        return (
            <Layout style={{height:'100%'}}>
                <TopNav/>

                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                       {/*nav*/}
                       <SliderNav/>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px',margin: '16px 0' }}>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}