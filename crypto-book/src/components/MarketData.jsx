
import useAxios from "../hooks/useAxios";
import Coin from "./Coin";

const MarketData = () => {
    
    const {response, loading} = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en');
    console.log('MarketData ------ ', response);
    if(loading){
        return (
            <div className='loading'>Loading...</div>
        );
    }
    if(response === null){
        return (
            <div className="loading">Network Error</div>
        );
    }
    
    
    return(
        <div className="market">
            <Coin cryptos={response}/>
        </div>
    );

}

export default MarketData;