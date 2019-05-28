import React,{ Component } from 'react'

import {
    Form, Icon, Input, Button, Checkbox, message
} from 'antd';
  
import {
    Redirect, withRouter
  } from "react-router-dom";


import stroage from '../model/Stroage' 

// import cookie from '../model/Cookie' 

const info = () => {
    message.error('用户名或者密码错误，请重新输入！');
};

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            login: false
         };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
              console.log('Received values of form: ', values);
              if(values.userName === 'admin' && values.password === '123'){
                // cookie.setCook('cookieKey', JSON.stringify(values));
                  this.setState({
                      login: true
                  })

                  stroage.set('login',values) 
              }else{
                 info()
              }
          }
        });
    }

    componentDidMount(){
        let login = stroage.get('login')
        // let login = cookie.getCook('cookieKey')
        if(login){
            this.setState({
                login: true
            })
        }
    }
    



    render() {
        if(this.state.login){
            return <Redirect to= {{pathname: "/home"}} />;
        }
        const { getFieldDecorator } = this.props.form;
        return (
            <div className = 'login'>
                <h2>
                    <img src = {require('../image/logo.png')} alt = '' className = 'logo_login'/>
                    <span><b>React</b> Admin</span>
                </h2>
                <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                        {getFieldDecorator('userName', {
                            rules: [{ 
                                required: true ,message: '请输入用户名!'
                            }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                        </Form.Item>
                        <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true ,message: '请输入正确密码!'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                        </Form.Item>
                        <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住我</Checkbox>
                        )}
                        <a className="login-form-forgot" href=""style = {{float: "right"}}>忘记密码</a>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" block>
                                登录
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <p style = {{float: "right"}}>
                                <span>新用户？</span>
                                <a className="login-form-forgot" href="">现在注册</a>
                            </p>
                        </Form.Item>
                </Form>
            </div>
        );
    }
}

const Login = Form.create({ name: 'normal_login' })(LoginForm);

export default Login;