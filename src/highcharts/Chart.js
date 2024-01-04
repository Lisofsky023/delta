import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const Chart = ({ chartData }) => {
  const options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Selected Row Data'
    },
    xAxis: {
      categories: ["Current Day", "Yesterday", "This Day Last Week"]
    },
    yAxis: {
      title: {
        text: 'Value'
      }
    },
    series: [{
      name: 'Row Data',
      data: chartData
    },],
    accessibility: {
      enabled: false
    }
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Chart;