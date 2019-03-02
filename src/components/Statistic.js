import React ,{ Component } from 'react';

import { Statistic, Card, Row, Col, Icon } from 'antd';

class statistic extends Component {
    constructor(props) {
        super(props);
        this.state = {  

        };
    }
    render() {
        return (
            <div>
                  <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={16}>
                    <Col span={6}>
                        <Card>
                        <Statistic
                            title="新用户"
                            value={485}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<Icon type="user" />}
                        />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <Statistic
                            title="用户总数"
                            value={2134}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<Icon type="team" />}
                        />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <Statistic
                            title="今日销售额"
                            value={9307}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<Icon type="money-collect" />}
                            suffix="¥"
                        />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <Statistic
                            title="总资产"
                            value={129765}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<Icon type="dollar" />}
                            suffix="¥"
                        />
                        </Card>
                    </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default statistic;   