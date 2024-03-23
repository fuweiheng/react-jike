import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

const BarChart = ({title})=>{
  const chartRef = useRef(null)
  useEffect(()=>{
    const chartDom = chartRef.current
    const myChart = echarts.init(chartDom);
    const option = {
      title: {
        text: title
      },
      xAxis: {
        type: 'category',
        data: ['vue', 'react', 'angular']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [100,180,120],
          type: 'bar'
        }
      ]
    };
    option && myChart.setOption(option);
    
  },[])
  return <div ref={chartRef} style={{width:'500px', height: '500px'}}></div>
} 
export default BarChart
