import '../App.css';
import ReactApexChart from "react-apexcharts";

const BitcoinPriceChart = ({data}) => {
    console.log(data)
    if(!data){
        return <div>Loading...</div>
    }

    const series= [{
        name: 'Bitcoin Price',
        data: [...data]
      }];

    const options = {
    chart: {
        height: 400,
        type: 'area',
        offsetX: 7,
        toolbar: {
            show: false,
        },
        zoom:{
            enabled: false,
        },
        animations:{
            enabled: true,
            easing: 'easeinout',
            speed: 500,
        animateGradually: {
            enabled: true,
            delay: 150
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350
        }
        }
    },
    colors:['#2DFF2D'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    responsive: [
        {
            breakpoint: 700,
            options:{
                chart: {
                    height: 300,
                    width: 400,
                    type: 'area',
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
    fill: {
        type: "gradient",
        gradient: {
            gradientToColors: ['#32AA78'],
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0,
          stops: [0,90,100]
        }
      },
    xaxis: {
        labels:{
            show: true,
        },        
        type: 'datetime',
        categories: [],
        
    },
    tooltip: {
        x: {
        format: 'dd/MM/yy HH:mm'
        },
    },
    yaxis: {
        labels:{
            show: false,
        }
    },
    grid: {
        show: false,
        padding: {
            top: 0,
            right: 25,
            bottom: 0,
            left: 10
        }, 
    }
    };
  



    return (
        
            <ReactApexChart options={options} series={series} type="area" height={300} />
        
    );
}

export default BitcoinPriceChart