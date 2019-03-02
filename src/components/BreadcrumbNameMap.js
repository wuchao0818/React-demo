import React ,{ Component } from 'react'

import PropTypes from "prop-types";

import { Link } from 'react-router-dom';
import { Breadcrumb , Icon} from 'antd'

const breadcrumbNameMap = {
    '/home': '首页',
    '/news': '新闻',
    '/user': '用户',
    '/store': '商家统计',
    '/query': '商品查询',
    '/others': '其他',
    '/user/userinfo': '编辑个人资料',
  };



class BreadcrumbNameMap extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    constructor(props,context) {
        super(props,context);
        this.state = { 
            extraBreadcrumbItems: ''
         };
    }

    getPath() {
        const pathSnippets = this.context.router.history.location.pathname.split('/').filter(i => i);
        const extraBreadcrumbItems = pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            return (
                    <Breadcrumb.Item key={url}>
                        <Link to={url}>
                        {breadcrumbNameMap[url]}
                        </Link>
                    </Breadcrumb.Item>
            );
          });
        this.setState({
            extraBreadcrumbItems: extraBreadcrumbItems
        })
    }
    componentWillMount() {
        //首次加载的时候调用，形成面包屑
        this.getPath();
    }
    componentWillReceiveProps(){
    //任何子页面发生改变，均可调用，完成路径切分以及形成面包屑
        this.getPath();
    }
        

    render() {
        return (
            <span>
            <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item href="">
                    <Icon type="home" />
                </Breadcrumb.Item>
                {this.state.extraBreadcrumbItems}
            </Breadcrumb> 
            </span>
        );
    }
}

export default BreadcrumbNameMap;