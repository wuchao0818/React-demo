import echarts from 'echarts/lib/echarts';

 
export const barOptions = {
    title: { text: '销售图表' },
    tooltip: {},
    toolbox: {
        feature: {
            magicType: {
                show: true, 
                type: ['line', 'bar'],
                icon: {
                    // bar: "image://bar.png"
                },
                // iconStyle:{
                //     color: 'blue'
                // }
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

// export const  lineOptions = {
//     title: {
//         text: '红包活动数据',
//         subtext: '数据来源：华秉科技-dancer',
//     },
//     tooltip: {
//         trigger: 'axis',
//     },
//     //图例名
//     legend: {
//         data:['活动人数','分享人数']
//     },
//     grid: {
//         left: '3%',   //图表距边框的距离
//         right: '4%',
//         bottom: '3%',
//         containLabel: true
//     },
//     //工具框，可以选择
//     toolbox: {
//         feature: {
//             saveAsImage: {}
//         }
//     },
//     //x轴信息样式
//     xAxis: {
//         type: 'category',
//         boundaryGap: false,
//         data: ['12-01','12-02','12-03','12-04','12-05','12-05','12-06','12-07','12-08','12-09','12-10','12-11','12-12','12-13'],
//         //坐标轴颜色
//         axisLine:{
//             lineStyle:{
//                 color:'red'
//             }
//         },
//         //x轴文字旋转
//         axisLabel:{
//             rotate:30,
//             interval:0
//         },
//     },

//     yAxis : [
//         {
//             type : 'value',
//             axisLabel : {
//                 formatter: '{value} 人'
//             }
//         }
//     ],
//     series: [
//         //虚线
//         {
//             name:'活动人数',
//             type:'line',
//             symbolSize:4,   //拐点圆的大小
//             color:['red'],  //折线条的颜色
//             data:[1000, 300, 500, 800, 300, 600,500,800, 300, 500, 800, 300, 600,500],
//             smooth:false,   //关键点，为true是不支持虚线的，实线就用true
//             itemStyle:{
//                 normal:{
//                     lineStyle:{
//                         width:2,
//                         type:'dotted'  //'dotted'虚线 'solid'实线
//                     }
//                 }
//             }
//         },
//         //实线
//         {
//             name:'分享人数',
//             type:'line',
//             symbol:'circle',
//             symbolSize:4,
//             itemStyle:{
//                 normal:{
//                     color:'red',
//                     borderColor:'red'  //拐点边框颜色
//                 }
//             },
//             data:[220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310]
//         },
//     ]
// }