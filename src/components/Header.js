import React ,{ Component } from 'react'

import {
    Redirect
  } from "react-router-dom";

import { Input, Avatar, Button } from 'antd';
import stroage from '../model/Stroage' 
// import cookie from '../model/Cookie' 

const Search = Input.Search;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            login: false
        };
    }

    backLogin = () => {
        this.setState({
            login: true
        })
        stroage.remove('login')
        // cookie.removeCooke('cookieKey')
    }
    render() {
        if(this.state.login){
            return <Redirect to= {{pathname: "/"}} />;
        }
        return (
            <div className = 'search'>
                <div>
                    <Search
                        placeholder="搜索"
                        onSearch={value => console.log(value)}
                        enterButton
                        style={{ width: 400,marginLeft:60,position:'relative',top:18 }}
                    />
                    <span style = {{float: "right",position:'relative',right:70}}>
                        <Avatar shape="square" size="large" 
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        <Button type="primary" style = {{marginLeft: 20}} onClick = {this.backLogin}>退出登录</Button>
                    </span>
                </div>
            </div>
        );
    }
}

export default Header;