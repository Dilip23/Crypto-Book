import { useParams } from 'react-router-dom';
import useAxios from '../hooks/useAxios';


const CoinDetail = () => {
    const {id} = useParams();
    const { response } = useAxios(`coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`);
    
    function formatCompactNumber(number) {
        const formatter = Intl.NumberFormat("en", { notation: "compact" });
        return formatter.format(number);
      }


    if(!response){
        return (<div className='loading'>Loading...</div>);
    }

    return(
        <div>
            <div className='details'>
                <div className='coin-name'>
                    <img src={response.image.large} alt="image"/>
                    <div className='coin-title'>
                        <p>{response.id.toUpperCase()}</p>
                        <p>({response.symbol.toUpperCase()})</p>
                    </div>
                    <a className = "coin-link" href={response.links.homepage}>Homepage</a>
                </div>

                <div className='coin-prices'>
                    <p className='current-price'>${response.market_data.current_price.usd.toLocaleString()}</p>
                    <p className='current-change-perc'>{response.market_data.price_change_percentage_24h.toFixed(2)}%</p>
                    <div className='prices'>
                        <div className='high-prices'>
                            <span className='prices-heading'>ATH</span>
                            <p>${response.market_data.ath.usd.toLocaleString()}</p>
                            <p>{response.market_data.ath_change_percentage.usd.toFixed(2)}%</p>

                        </div>

                        <div className='low-prices'>
                            <span className='prices-heading'>ATL</span>
                            <p>${response.market_data.atl.usd.toLocaleString()}</p>
                            <p>{response.market_data.atl_change_percentage.usd.toFixed(2)}%</p>
                        </div>
                    </div>
                </div>

                <div className='market-data'>
                    <p><strong>Market Cap: </strong>${formatCompactNumber(response.market_data.market_cap.usd)}</p>
                    <p><strong>Fully Diluted Valuation: </strong>{response.market_data.fully_diluted_valuation.usd ? formatCompactNumber(response.market_data.fully_diluted_valuation.usd) : 0 }</p>
                    <br/>

                    <p><strong>Total Volume: </strong>${formatCompactNumber(response.market_data.total_volume.usd)}</p>
                    <p><strong>Circulating Supply: </strong>{formatCompactNumber(response.market_data.circulating_supply)}</p>

                </div>
            </div>

            <div className='description'>     
                <p dangerouslySetInnerHTML={{ __html: response.description.en }}></p>
            </div>
        </div>
    );
}

export default CoinDetail;