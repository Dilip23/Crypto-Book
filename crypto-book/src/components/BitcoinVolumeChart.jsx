import ReactApexChart from "react-apexcharts";

const BitcoinVolumeChart = ({data}) => {

    console.log('Data -> ',data);
    // const xAxis = data.map(item => new Date(item[0]).getTime())
    // console.log('xAxis --> ',xAxis);

    const series= [{
        name: 'Bitcoin Volume',
        data: [...data]
      }];
    const options= {
    chart: {
        type: 'bar',
        
        height: 400,
        toolbar: {
            show: false,
        },
        zoom:{
            enabled: false,
        }
    },
    plotOptions: {
        bar: {
        horizontal: false,
        columnWidth: '80%',
        endingShape: 'rounded',
        borderRadius: 2,
        borderRadiusApplication: 'end',
        },
    },
    dataLabels: {
        enabled: false
    },
    colors:['#FF1D1D'],
    stroke: {
        show: true,
        width: 1,
        colors: ['transparent']
    },
    responsive: [
        {
            breakpoint: 700,
            options:{
                chart: {
                    height: 300,
                    width: 400,
                    type: 'bar',
                    offsetX: 7,
                    toolbar: {
                        show: false,
                    },
                    zoom:{
                        enabled: false,
                    }
                },

            }
        }
    ],

    xaxis: {
        // categories: [...xAxis],
        type: "datetime",
        labels:{
            
            show:true,
        },
        
    },
    yaxis: {
        labels:{
            show:false,
        },
        
    },
    grid: {
        show: false,
        padding: {
            top: 0,
            right: 18,
            bottom: 0,
            left: 0
        }, 
    },
    fill: {
        type: "gradient",
        gradient: {
            shade:"light",
          shadeIntensity: 0.3,
          gradientToColors:['#2DFF2D'],
          type: "vertical",
          opacityFrom: 0.7,
          opacityTo: 0.8,
        }
    },
    
};

    return (
        
            <ReactApexChart options={options} series={series} type="bar" height={300} />
        
    );
}

export default BitcoinVolumeChart