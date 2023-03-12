import { useState } from "react";
import {useParams} from "react-router-dom";
import useAxios from "../hooks/useAxios";
import ReactApexChart from "react-apexcharts";
import '../App.css';

const HistoryChart = () => {
    const { id } = useParams();
    console.log('id--->',id);
    let {response} = useAxios(`coins/${id}/market_chart?vs_currency=usd&days=60`);
    if(!response){
        return (<div className='loading'>Loading...</div>);
    }
    console.log('History',response);

    const series= [{
        name: 'Bitcoin Price',
        data: [...response.prices]
      }];


    const options = {
    chart: {
        height: 400,
        width: '100%',
        type: 'area',
        offsetX: 0,
        toolbar: {
            show: false,
        },
        zoom:{
            enabled: false,
        }
    },
    
    colors:['#1757EB'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width:0.5,
    },
    fill: {
        type: "gradient",
        gradient: {
            
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0,90,100]
        }
      },
    xaxis: {
        labels:{
            show: false,
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
            right: 0,
            bottom: 0,
            left: 0
        }, 
    }
    };
  
    return (
        // <div>History Chart</div>
            <ReactApexChart options={options} series={series} type="area" height={500} />   
    );
}

export default HistoryChart;