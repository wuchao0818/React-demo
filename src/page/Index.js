import React , { Component } from 'react'
import {
    Route,
    Link,
    withRouter
  } from 'react-router-dom'

  import {
    Layout, Menu, Icon,
  } from 'antd';
  
  
import Home from './Home'
import News from './News'
import User from './User'
import Store from './Store'
import Query from './Query'
import Others from './Others'
import Head from '../components/Header'
import BreadcrumbCustom from '../components/BreadcrumbNameMap'

const {
    Header, Content, Footer, Sider,
  } = Layout;
const SubMenu = Menu.SubMenu;

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            current: '1',
            openKeys: []
        };
        props.history.listen(() => {
            let array = window.location.pathname.split('/');
            console.log(array,'history')
            if(array[1]){
                switch(array[1]){
                    case 'home': this.setState({current: '1'});break;
                    case 'news': this.setState({current: '2'});break;
                    case 'user': this.setState({current: '3'});break;
                    case 'store': this.setState({current: '6'});break;
                    case 'query': this.setState({current: '8'});break;
                    case 'others': this.setState({current: '9'});break;
                    default: break;
                }
            }else {
                this.setState({
                    current: '1',
                })
            }
          })
    }

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }

    onOpenChange = (key) =>{
        console.log(key.join("-"))
        let keys = key.join("-")
        if(keys === 'sub2'){
            this.setState({
                openKeys: ['sub2']
            })
        }else{
            this.setState({
                openKeys: []
            })
        }
    }

    componentDidMount(){
        let array = window.location.pathname.split('/');
        console.log(array)
        if(array[1]){
            switch(array[1]){
                case 'home': this.setState({current: '1'});break;
                case 'news': this.setState({current: '2'});break;
                case 'user': this.setState({current: '3'});break;
                case 'others': this.setState({current: '9'});break;
                case 'query': this.setState({
                                current: '8',
                                openKeys: ['sub2']
                            });break;
                case 'store': this.setState({
                                current: '6',
                                openKeys: ['sub2']
                              });break;
                default: break;
            }
        }else {
            this.setState({
                current: '1',
            })
        }
    }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                >
                <div className="logo" />
                <Menu theme="dark" selectedKeys={[this.state.current]} openKeys={this.state.openKeys} mode="inline" className = 'app' onOpenChange={this.onOpenChange}>
                    <Menu.Item key="1">
                    <Icon type="pie-chart" />
                    <span>
                        <Link to = '/home'>首页</Link>
                    </span>
                    </Menu.Item>
                    <Menu.Item key="2">
                    <Icon type="desktop" />
                    <span>
                        <Link to = '/news'>新闻</Link>
                    </span>
                    </Menu.Item>
                    <Menu.Item key="3">
                    <Icon type="user" />
                    <span>
                        <Link to = '/user'>用户</Link>
                    </span>
                    </Menu.Item>
                    <SubMenu
                    key="sub2"
                    title={<span><Icon type="team" /><span>统计</span></span>}
                    >
                    <Menu.Item key="6">
                        <span>
                            <Link to = '/store'>商家统计</Link>
                        </span>
                    </Menu.Item>
                    <Menu.Item key="8">
                        <span>
                            <Link to = '/query'>商品查询</Link>
                        </span>
                    </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9">
                    <Icon type="file" />
                        <span>
                            <Link to = '/others'>其他</Link>
                        </span>
                    </Menu.Item>
                </Menu>
                </Sider>
                <Layout>
                <Header style={{ background: '#fff', padding: 0 }} ><Head/></Header>
                <Content style={{ margin: '0 16px' }}>
                    <BreadcrumbCustom/>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <Route path="/home" component={Home}/>  
                        <Route path="/news" component={News}/>
                        <Route path="/user" component={User}/> 
                        <Route path="/store" component={Store}/>
                        <Route path="/query" component={Query}/>
                        <Route path="/others" component={Others}/>    
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
                </Layout>
          </Layout>
        );
    }
}


export default withRouter (index);