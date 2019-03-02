import  React ,{ Component }  from 'react';

import moment from 'moment';

import {
    Form, Input, Icon, Cascader, Select,Upload, message, Button, DatePicker
  } from 'antd';

import stroage from '../model/Stroage'  

const { Option } = Select;

const residences = [{
    value: '江苏省',
    label: '江苏省',
    children: [{
      value: '南京',
      label: '南京',
      children: [{
        value: '鼓楼区',
        label: '鼓楼区',
      },{
        value: '建邺区',
        label: '建邺区',
      }],
    }],
  }];

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}   

  
class UserInfoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            confirmDirty: false,
            autoCompleteResult: [],
            loading: false,
            name: '',
            birthday: undefined,
            city: '',
            phone: '',
            email: '',           
         };
    }

    handleChange = (info) => {
        console.log(info,'info')
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl => this.setState({
            imageUrl,
            loading: false,
          }));
        }
      }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          stroage.set('info',values)
          this.setState({
            name: values.name,
            email: values.email
          })
          console.log('Received values of form: ', values);
          message.success('提交成功')
        }
      })
    }

    componentDidMount(){
      let userinfo = stroage.get('info');
      if(userinfo){
          this.setState({
              name: userinfo.name,
              city: userinfo.city,
              birthday: userinfo.birthday,
              // city: userinfo.city?userinfo.city.join("-"):'',
              phone: userinfo.phone,
              email: userinfo.email
          })
      }
    }

    render() {
      console.log(this.state)
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 3 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };
       

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
            })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );

        const uploadButton = (
            <div>
              <Icon type={this.state.loading ? 'loading' : 'plus'} />
              <div className="ant-upload-text">Upload</div>
            </div>
          );
        const imageUrl = this.state.imageUrl;
        
       
          
        return (
            <div className = 'userInfo'>
                <h2 style = {{background: '#67d3e0',color: '#fff',padding: 10}}>个人资料</h2>
                <div>
                    <h2 style = {{padding: 15}}>资料信息</h2>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item
                        {...formItemLayout}
                        label="姓名"
                        >
                        {getFieldDecorator('name', {
                            rules: [{
                            type: 'string',
                            }, {
                            required: false
                            }],
                            initialValue: this.state.name
                        })(
                            <Input />
                        )}
                        </Form.Item>
                        <Form.Item
                        {...formItemLayout}
                        label="生日"
                        >
                        {getFieldDecorator('birthday', {
                            rules: [{
                            required: false
                            }],
                            initialValue: moment(this.state.birthday)
                        })(
                            <DatePicker/>
                        )}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label="地区"
                            >
                            {getFieldDecorator('city', {
                                rules: [{ type: 'array', required: false, message: 'Please select your habitual residence!' }],
                                initialValue: this.state.city
                            })(
                                <Cascader options={residences} />
                            )}
                        </Form.Item> 
                        <Form.Item
                            {...formItemLayout}
                            label="联系方式"
                            >
                            {getFieldDecorator('phone', {
                                rules: [{ required: false, message: 'Please input your phone number!' }],
                                initialValue:this.state.phone
                            })(
                                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                            )}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label="邮箱"
                            >
                            {getFieldDecorator('email', {
                                rules: [{
                                type: 'email'
                                }, {
                                required: false, message: 'Please input your E-mail!',
                                }],
                                initialValue:this.state.email
                            })(
                                <Input />
                            )}
                        </Form.Item>

                        <Form.Item
                            {...formItemLayout}
                            label="上传头像"
                            >
                            {getFieldDecorator('pic', {
                                rules: [{
                                required: false,
                                }],
                            })(
                                <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="//jsonplaceholder.typicode.com/posts/"
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange}
                              >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style= {{width:120,height:120}}/> : uploadButton}
                              </Upload>
                            )}
                        </Form.Item>
                        <Form.Item >
                          <Button type="primary" htmlType="submit" block>提交</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

const UserInfo = Form.create({ name: 'UserInfo' })(UserInfoForm);

export default UserInfo;