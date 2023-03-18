import useAxios from '../hooks/useAxios';
import '../App.css';
import BitcoinVolumeChart from "./BitcoinVolumeChart";
import BitcoinPriceChart from "./BitcoinPriceChart";
import { uniqueData } from '../utils/utils';
import MarketData from './MarketData';

const Bitcoin = () => {
    const { response } = useAxios('coins/bitcoin/market_chart?vs_currency=usd&days=30');
    console.log('response ---- ',response);

    if(!response){
        return <div className='loading'>Loading...</div>
    }

    // Handling Prices data
    const finalPrices = uniqueData(response, 'prices');

    // Handling Volume Data
    const finalVolume = uniqueData(response, 'total_volumes');

    return(
        <>

        <h5 className='bitcoin-overview'>Bitcoin Overview</h5>

        
        <div className='bitcoin'>
            
            <div className='bitcoin-item'>
                <p>BTC Price: <span>${finalPrices[30][1].toFixed(2)}</span></p>
                <BitcoinPriceChart data={finalPrices} className="chart"/>
            </div>
            
            <div className='bitcoin-item'>
                <p>24h Volume: <span>{finalVolume[30][1].toLocaleString(undefined,
            {
                minimumFractionDigits:2,
            })}</span></p>
                <BitcoinVolumeChart data={finalVolume} className="chart"/>
            </div>
            
        </div>
        <MarketData />
        </>
    );
}

export default Bitcoin;