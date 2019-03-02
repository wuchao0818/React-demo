import React ,{ Component } from 'react'

import Statistic from '../components/Statistic'

import * as EchartsOption from '../action/Echart';

import echarts from 'echarts/lib/echarts';

require('echarts/lib/chart/bar');
require('echarts/lib/component/toolbox');
require('echarts/lib/component/title');
require('echarts/lib/chart/line');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount(){
        var myChartbar = echarts.init(document.getElementById('bar'));
        // var myChartline = echarts.init(document.getElementById('line'));
        // 绘制图表
        myChartbar.setOption(EchartsOption.barOptions);
        // myChartline.setOption(EchartsOption.lineOptions);
    }

    render() {
        return (
            <div className = 'Home'>
                <Statistic />
                <div>
                    <div>
                        <div id = 'bar' style={{ width: 800, height: 400 }}></div>
                    </div>
                    <div>
                        {/* <div id = 'line' style={{ width: 800, height: 400 }}></div> */}
                    </div>
                </div>
            </div>            
        );
    }
}

export default Home;