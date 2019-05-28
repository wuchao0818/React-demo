import React ,{ Component } from 'react'

import Statistic from '../components/Statistic'

import * as EchartsOption from '../action/Echart';

import echarts from 'echarts/lib/echarts';

require('echarts/lib/chart/bar');
require('echarts/lib/component/toolbox');
require('echarts/lib/component/title');
require('echarts/lib/chart/line');
require('echarts/lib/chart/pie');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount(){
        var myChartbar = echarts.init(document.getElementById('bar'));
        var myChartpie = echarts.init(document.getElementById('pie'));
        // 绘制图表
        myChartbar.setOption(EchartsOption.barOptions);
        myChartpie.setOption(EchartsOption.pieOptios);
    }

    render() {
        return (
            <div className = 'Home'>
                <Statistic />
                <div style = {{display: 'flex',marginTop:'30px'}}>
                    <div>
                        <div id = 'bar' style={{ width: 700, height: 400 }}></div>
                    </div>
                    <div>
                        <div id = 'pie' style={{ width: 500, height: 400 }}></div>
                    </div>
                </div>
            </div>            
        );
    }
}

export default Home;