import React ,{ Component } from 'react'

import { List, Avatar, Icon } from 'antd';

import * as actions from '../action/action';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listData: []
        };
    }
    componentDidMount(){
        console.log(this.props)
        this.setState({
            listData: actions.NewsList()
        })
    }
    render() {
        const { listData } = this.state
        const IconText = ({ type, text }) => (
            <span>
              <Icon type={type} style={{ marginRight: 8 }} />
              {text}
            </span>
          );
        return (
            <div>
                  <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 3,
                    }}
                    bordered
                    dataSource={listData}
                    renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                        extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                    >
                        <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                        />
                        {item.content}
                    </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default News;