import echarts from 'echarts/lib/echarts';

 
export const barOptions = {
    title: { 
        text: '销售图表',
        textStyle: {
            color: '#67d3e0'
        } 
    },
    tooltip: {},
    toolbox: {
        feature: {
            magicType: {
                show: true, 
                type: ['line', 'bar'],
                icon: {
                    // bar: "image://bar.png"
                },
            },
            restore: {show: true},
            
        }
    },
    xAxis: {
        name: '月份',
        data: ["一月", "二月", "三月", "四月", "五月", "六月","七月","八月","九月","十月","十一月","十二月"]
    },
    yAxis: {
        name: '销售额'
    },
    series: [{
        name: '销量',
        type: 'bar',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#83bff6'},
                        {offset: 0.5, color: '#188df0'},
                        {offset: 1, color: '#188df0'}
                    ]
                )
            },
            emphasis: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#2378f7'},
                        {offset: 0.7, color: '#2378f7'},
                        {offset: 1, color: '#83bff6'}
                    ]
                )
            }
        },
        data: [520, 420, 346, 710, 515, 831,520, 420, 346, 710, 515, 831]
    }]
}


export const pieOptios = {
    title : {
        text: '用户访问来源',
        x:'center',
        textStyle: {
            color: '#67d3e0'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            label: {
                normal: {
                    show: true,
                    formatter: '{b}:'+'\n'+'{c}({d}%)'
                }
            },
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}