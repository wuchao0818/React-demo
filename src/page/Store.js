import React ,{ Component } from 'react';

import { Table , Popconfirm, message} from 'antd';

import * as actions from '../action/action';


class Store extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dataSource:[],
            selectedRowKeys: '',
            key:''
         };
        this.columns = [{
            title: 'name',
            dataIndex: 'name',
            width: '30%',
            editable: true,
          }, {
            title: 'age',
            dataIndex: 'age',
          }, {
            title: 'address',
            dataIndex: 'address',
          }, {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record) => (
              this.state.dataSource.length >= 1
                ? (
                  <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                    <a href="javascript:;">Delete</a>
                  </Popconfirm>
                ) : null
            ),
          }];
    }

    onSelectChange = (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        let key = selectedRowKeys[0]
        this.setState({ 
            selectedRowKeys: selectedRowKeys,
            key: key
        });
    }

    handleDelete = (key) => {
        const dataSource = [...this.state.dataSource];
        if(key === this.state.key && this.state.selectedRowKeys.length === 1){
            this.setState({ 
                dataSource: dataSource.filter(item => item.key !== key),
                selectedRowKeys: ''
            });
            message.success('删除成功')
        }else{
            message.error('请选择一条删除的数据')
        }
    }

    componentDidMount(){
        this.setState({
            dataSource: actions.DataList()
        })
    }
    
    render() {
        const { dataSource ,selectedRowKeys } = this.state;

        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        return (
            <div className = 'store'>
                <div style ={{padding: '0 0 20px 10px'}}>
                    <h2 style = {{color: '#67d3e0'}}>商家信息</h2>
                </div>
                <div>
                    <Table  bordered rowSelection={rowSelection} columns={this.columns} dataSource={dataSource} />
                </div>
            </div>
        );
    }
}

export default Store;