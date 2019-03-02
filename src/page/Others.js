import React ,{ Component } from 'react';

import {
    Link
  } from 'react-router-dom'
import { Empty } from 'antd';


class Others extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Empty
                    image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                    description={
                    <span>
                        暂未开发
                        <Link to = '/home'>请跳转到首页</Link>
                    </span>
                    }
                >
                </Empty>
            </div>
        );
    }
}

export default Others;