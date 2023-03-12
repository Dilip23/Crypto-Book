import React from 'react';
import HistoryChart from '../components/HistoryChart';
import CoinDetail from '../components/CoinDetail';

const Detailpage = () =>{
    return (
        <div>
            <CoinDetail/>
            <HistoryChart />
        </div>
        );
}

export default Detailpage;