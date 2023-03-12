import '../App.css';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link } from "react-router-dom";


const TableData = ({crypto}) => {
    console.log(crypto);
    return (
        
        
        <tr>
        <td>{crypto.market_cap_rank}</td>
        <td>
        <Link className='link' to={`/coin/${crypto.id}`}>
            <div className="crypto-name">
                <img src={crypto.image}/>
                <p>{crypto.name}</p>
                <p>({crypto.symbol.toUpperCase()})</p>
            </div>
        </Link>
        </td>
        <td>${crypto.current_price.toLocaleString(undefined,
            {
                minimumFractionDigits:2,
            })}</td>
        <td style={{color: Number(crypto.price_change_percentage_1h_in_currency).toFixed(1) > 0 ? "green" : "red"}}>{Number(crypto.price_change_percentage_1h_in_currency).toFixed(1)}%</td>
        <td style={{color: Number(crypto.price_change_percentage_24h_in_currency).toFixed(1) > 0 ? "green" : "red"}}>{Number(crypto.price_change_percentage_24h_in_currency).toFixed(1)}%</td>
        <td style={{color: Number(crypto.price_change_percentage_7d_in_currency).toFixed(1) > 0 ? "green" : "red"}}>{Number(crypto.price_change_percentage_7d_in_currency).toFixed(1)}%</td>
        <td>${crypto.total_volume.toLocaleString()}</td>
        <td>${crypto.market_cap.toLocaleString()}</td>
        <td className='sparklines'>
            <Sparklines data={crypto.sparkline_in_7d.price}>
                <SparklinesLine style={{ fill: "none" }} color={
                      crypto.sparkline_in_7d.price[0] >
                      crypto.sparkline_in_7d.price[
                        crypto.sparkline_in_7d.price.length - 1
                      ]
                        ? "red"
                        : "green"
                    }/>
            </Sparklines>
        </td>
    </tr>
    
    
    );
}

export default TableData;