
import useAxios from "../hooks/useAxios";
import Coin from "./Coin";

const MarketData = () => {
    
    const {response, loading} = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d');
    console.log('MarketData ------ ', response);
    if(loading){
        return (
            <div className='loading'>Loading...</div>
        );
    }
    
    return(
        <div className="market">
        {/* <h1>Markets</h1> */}
        <Coin cryptos={response}/>
        {/* {response && response.map(coin => <p>{coin.id}</p>)} */}
        </div>
    );

}

export default MarketData;