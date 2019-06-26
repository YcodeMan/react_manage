import React from 'react'
import { Form, Icon, Input, Button,Row,Col } from 'antd';
 const LoginForm = ({form}) => {
      const  handleSubmit = (e) => {
              e.preventDefault();
              form.validateFields((err,values) => {
                if(!err) {
                       let {username,pwd} = values
                       console.log('正在登入')
                }
              })
                
        }
        const toGithub = () => {        
         
                window.location.href = 'https://github.com/login/oauth/authorize?client_id=0dd83c6f82c699a43584';
        }
        const { getFieldDecorator } = form;
        return  <Form onSubmit={handleSubmit} className="login-form">
        <Row>

       <Col offset={8} span={8}>
        <Form.Item>
        {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user"  />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
        {getFieldDecorator('pwd', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
         
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
        <Form.Item>
            第三方登录
          <Icon onClick={toGithub} type="github"/>
        </Form.Item>
        </Col>
        </Row> 
      </Form> 


}

export default  Form.create({ name: 'normal_login' })(LoginForm);