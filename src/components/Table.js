import React ,{ Component } from 'react';

import { Table , Popconfirm ,message} from 'antd';

import * as actions from '../action/action';

class table extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [],
            selectedRowKeys: '',
            key: ''
         };
        this.columns = [{
            title: '商品名称',
            dataIndex: 'name',
            width: '30%',
            editable: true,
          }, {
            title: '商品状态',
            dataIndex: 'shopstate',
            render:(text,record) =>{
                let color = text === '已出售' ? 'red' : 'green';
                return(
                    <span style = {{color: color}}>{text}</span>
                )
                
            }
          }, {
            title: '商品种类',
            dataIndex: 'species',
          },{
            title: '价格',
            dataIndex: 'price',
          },{
            title: '商品渠道',
            dataIndex: 'channel',  
          },
          {
            title: '操作',
            dataIndex: 'operation',
            render: (text, record) => (
              this.state.data.length >= 1
                ? (
                  <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                    <a href="javascript:;">Delete</a>
                  </Popconfirm>
                ) : null
            ),
          }];
    }
    onSelectChange = (selectedRowKeys) => {
        let key = selectedRowKeys[0]
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ 
            selectedRowKeys: selectedRowKeys,
            key: key
         });
    }

    handleDelete = (key) => {
        const data = [...this.state.data];
        if( key === this.state.key && this.state.selectedRowKeys.length === 1){
            this.setState({ 
              data: data.filter(item => item.key !== key) ,
              selectedRowKeys: ''
            });
            message.success('删除成功')
        }else{
            message.error('请选择一条删除的数据')
        }
    
    }

    componentDidMount(){
        this.setState({
            data: actions.shopList()
        })
    }
    render() {
        const { data, selectedRowKeys} = this.state
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange
        }    
        return (
            <div className = "Table">
                <Table  rowSelection = {rowSelection} bordered columns={this.columns} dataSource={data} />
            </div>
        );
    }
}

export default table;