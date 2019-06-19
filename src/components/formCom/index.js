import React from "react"
import {  Form, Icon, Input, Button, Checkbox
} from 'antd';
import {connect} from "react-redux";
class FormCom extends React.Component{
    render(){
        let {data} = this.props;
        const { getFieldDecorator } = this.props.form;
        return(
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item
                    label="商家ID"
                    validateStatus="success"
                    onFieldsChange={this.handleChange.bind(this)}
                >

                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            value={data.id}
                        />
                </Form.Item>

                <Form.Item
                    label="商家名称"
                    validateStatus="success"
                    onFieldsChange={this.handleChange.bind(this)}
                >

                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        value={data.name}
                    />
                </Form.Item>

                <Form.Item
                    label="商家地址"
                    validateStatus="success"
                    onFieldsChange={this.handleChange.bind(this)}
                >

                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        value={data.address}
                    />
                </Form.Item>

                <Form.Item
                    label="商家电话"
                    validateStatus="success"
                    onFieldsChange={this.handleChange.bind(this)}
                >

                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        value={data.tel}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        点击
                    </Button>
                </Form.Item>
            </Form>
        )
    }
    handleSubmit(e){
       e.preventDefault()
    }
    handleChange(...rest){
        console.log(rest)
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(FormCom);

const mapStateToProps = (state)=>({
    data:state.tab.data
})

export default connect(mapStateToProps)(WrappedNormalLoginForm)