import React ,{ Component } from 'react';

import {
    Form, Button, Statistic, Card, Row, Col, Icon
  } from 'antd';

  
import Editor from 'wangeditor'
import stroage from '../model/Stroage' 
import time from '../model/Time'



class ActivityForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            editorHtml: '',
            editorText: '今天想说点什么',          
            name: '',
            birthday: '',
            city: '',
            phone: '',
            email: '', 
            day: ''          
         };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        })
    }
    componentDidMount(){
        const elem = this.editorElem
        const editor = new Editor(elem)
        let userinfo = stroage.get('info');
        if(userinfo){
            this.setState({
                name: userinfo.name,
                birthday: time.formatDateTime(userinfo.birthday),
                city: userinfo.city?userinfo.city.join("-"):'',
                phone: userinfo.phone,
                email: userinfo.email,
                day: time.getNowFormatDate()
            })
        }
        editor.customConfig.onchange = (html) => {
            this.setState({
                editorHtml: html,
                editorText: editor.txt.text()
              })
              this.props.form.setFieldsValue({
                'desc': editor.txt.text()
              });      
        }
        
        editor.create();
        editor.txt.html(this.state.editorText)

    }


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className = 'Activity'>
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item>
                            {getFieldDecorator('desc', {
                            rules: [{
                                required: false,
                            }, {// 使用自定义的校验规则
                                // validator: this.validateEditorFrom
                            }],
                            initialValue: ''
                            })(<div ref={(ref) => this.editorElem = ref } ></div>)}
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">提交</Button>
                        </Form.Item>
                    </Form>
                </div>
                <div>
                    <h2 style = {{background: '#67d3e0',color: '#fff',padding: 10}}>个人资料</h2>
                    <h2 style = {{padding: 15}}>个人详情</h2>
                    <div style={{padding: "0 0 20px 10px"}}>
                        <p className = 'Activity_info'>
                            <span>姓名: {this.state.name} </span>
                            <span>生日: {this.state.birthday} </span>
                        </p>
                        <p className = 'Activity_info'>
                            <span>地区: {this.state.city} </span>
                            <span>联系方式: {this.state.phone} </span>
                        </p>
                        <p className = 'Activity_info'>
                            <span>邮箱: {this.state.email} </span>
                        </p>
                    </div>
                </div>
                <div>
                    <div  className = 'conclusion'>
                        <h2>日总结</h2>
                        <p>{this.state.day}</p>
                        <div style ={{padding: '0 10px'}}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Card>
                                    <Statistic
                                        title="浏览"
                                        value={11.28}
                                        precision={2}
                                        valueStyle={{ color: '#3f8600' }}
                                        prefix={<Icon type="eye" />}
                                        suffix="%"
                                    />
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Card>
                                    <Statistic
                                        title="下载"
                                        value={9.3}
                                        precision={2}
                                        valueStyle={{ color: '#cf1322' }}
                                        prefix={<Icon type="cloud-download" />}
                                        suffix="%"
                                    />
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const Activity = Form.create({ name: 'Activity' })(ActivityForm);

export default Activity;