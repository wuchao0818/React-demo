import React ,{Component}from 'react'
import {
    Route,
    Link
  } from 'react-router-dom'

import Activity from '../components/Activity'
import UserInfo from '../components/UserInfo'

import { Menu, Icon, Avatar } from 'antd';

 
import stroage from '../model/Stroage' 

class User extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mode: 'inline',
            theme: 'light', 
            name: '',
            email:''
         };
    }

    componentDidMount(){
        let userinfo = stroage.get('info');
        if(userinfo){
            this.setState({
                name: userinfo.name,
                email: userinfo.email
            })
        }
    }
    
    render() {
        return (

            <div className = 'userPage'>
                <div className = 'left'>
                    <div className = 'imgGroup'>
                        <Avatar src={require('../image/photo.jpeg')} className = 'userImg'/>
                        <div style = {{marginTop: 30,color:'#fff'}}>
                            <p style = {{fontSize: 20}}>{this.state.name}</p>
                            <p>{this.state.email}</p>
                        </div>
                   </div>
                <Menu           style={{ width: 300 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode={this.state.mode}
                    theme={this.state.theme}
                >
                    <Menu.Item key="1">
                        <Icon type="mail" />
                        <span>
                            <Link to = '/user'>
                            近期活动
                            </Link>
                        </span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="calendar" />
                        <span>
                            <Link to = '/user/userinfo'>
                            编辑个人资料
                            </Link>
                        </span>
                    </Menu.Item>
                </Menu>
                </div>
                <div className = 'right'>
                    {/* {this.state.flag ? <Activity/> : ''} */}
                    <Route exact path = '/user' component = {Activity} />
                    <Route path = '/user/userinfo' component = {UserInfo} />
                </div>
            </div>
        );
    }
}

export default User;