import React , { Component } from 'react';
import {
    Form, Select, Input, Button, Row, Col, TreeSelect, InputNumber, DatePicker
  } from 'antd';

import * as actions from '../action/action';
import Table from '../components/Table'
const Option = Select.Option;  
const { RangePicker } = DatePicker;
  

class QueryForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            speciesData: [],
            value: '',
        };
    }

    onChange = (value) => {
        console.log(value);
    }
        
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }

    componentDidMount(){
        this.setState({
            speciesData: actions.speciesData()
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { speciesData } = this.state
        return (
            <div className = 'query'>
                <div style ={{padding: '0 0 20px 10px'}}>
                    <Form  layout="inline" onSubmit={this.handleSubmit}>
                    <Row>
                    <Col span = {8}>
                        <Form.Item
                            label="商品名称"
                            >
                            {getFieldDecorator('name', {
                                rules: [{
                                // message: 'The input is not valid E-mail!',
                                }, {
                                // required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input />
                            )}
                        </Form.Item>
                     </Col>
                     <Col span = {8}>   
                        <Form.Item
                            label="商品状态"
                            >
                            {getFieldDecorator('state')(
                                <Select
                                showSearch
                                style={{ width: 200 }}
                                optionFilterProp="children"
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                              >
                                <Option value="jack">已出售</Option>
                                <Option value="lucy">未出售</Option>
                                <Option value="tom">紧缺</Option>
                              </Select>,
                            )}
                        </Form.Item>
                    </Col>
                    <Col span= {8}>
                        <Form.Item
                            label="商品种类"
                            >
                            {getFieldDecorator('species')(
                                <TreeSelect
                                style={{ width: 200 }}
                                // value={this.state.value}
                                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                treeData={speciesData}
                                placeholder="Please select"
                                treeDefaultExpandAll
                                onChange={this.onChange}
                                multiple
                              />
                         
                            )}
                        </Form.Item>
                    </Col>
                    </Row>
                    <Row>
                    <Col span= {8}>
                        <Form.Item
                            label="价格区间"
                            >
                            {getFieldDecorator('price')(
                                <div>
                                    <InputNumber min={0} max={100000} defaultValue={0} step = {100} />
                                    <span> —— </span>
                                    <InputNumber min={1} max={100000} defaultValue={500} step = {100}/>
                                 </div>          
                            )}
                        </Form.Item>
                    </Col>
                    <Col span= {10}>
                        <Form.Item
                            label="选择日期"
                            >
                            {getFieldDecorator('date')(
                                <RangePicker
                                showTime={{ format: 'HH:mm' }}
                                format="YYYY-MM-DD HH:mm"
                                placeholder={['Start Time', 'End Time']}
                              />         
                            )}
                        </Form.Item>
                    </Col>
                    <Col span = {4} style = {{textAlign: 'right'}}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">确定</Button>
                        </Form.Item>
                    </Col>
                    </Row>
                    </Form>
                </div>
                <Table/>
            </div>
        );
    }
}
const Query = Form.create({ name: 'Query' })(QueryForm);

export default Query;