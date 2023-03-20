import '../App.css';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link } from "react-router-dom";
import {calculatePercentage , formatCompactNumber} from "../utils/utils.js"

const TableData = ({crypto}) => {
    console.log(crypto);
    let volume_perc = calculatePercentage(crypto.total_volume,crypto.market_cap) * 100;
    const final_volume_perc = volume_perc > 100 ? 100 : volume_perc <= 1 ? 2 : volume_perc;
    
    console.log('volume_perc ----- ',volume_perc)
    const volumeFiller = {
        width: `${final_volume_perc}%`,
    }
    const market_perc = calculatePercentage(crypto.circulating_supply, crypto.total_supply) * 100;
    const final_market_perc = market_perc > 100 ? 100 : market_perc <= 1 ? 2 : market_perc;
    const marketFiller = {
        width: `${final_market_perc}%`,
    }
    return (
        
        
        <tr>
        <td>{crypto.market_cap_rank}</td>
        <td>
        <Link className='link' to={`/coin/${crypto.id}`}>
            <div className="crypto-name">
                <img src={crypto.image} alt="Coin Logo"/>
                <p>{crypto.name}</p>
                <p>({crypto.symbol.toUpperCase()})</p>
            </div>
        </Link>
        </td>
        <td>${crypto.current_price.toLocaleString(undefined,
            {
                minimumFractionDigits:2,
            })}</td>
        <td style={{color: Number(crypto.price_change_percentage_1h_in_currency).toFixed(1) > 0 ? "#2DFF2D" : "#ff0707"}}>{Number(crypto.price_change_percentage_1h_in_currency).toFixed(1)}%</td>
        <td style={{color: Number(crypto.price_change_percentage_24h_in_currency).toFixed(1) > 0 ? "#2DFF2D" : "#ff0707"}}>{Number(crypto.price_change_percentage_24h_in_currency).toFixed(1)}%</td>
        <td style={{color: Number(crypto.price_change_percentage_7d_in_currency).toFixed(1) > 0 ? "#2DFF2D" : "#ff0707"}}>{Number(crypto.price_change_percentage_7d_in_currency).toFixed(1)}%</td>
        <td>
                <div class="design">
                    <div class="values">
                        <p>${formatCompactNumber(crypto.total_volume)}</p>
                        <p>${formatCompactNumber(crypto.market_cap)}</p>
                    </div>
                    <div class="meter animate">
                        <span style={volumeFiller}><span></span></span>
                    </div>
                </div>
        </td>
        <td>
                <div class="design">
                    <div class="values">
                        <p>${formatCompactNumber(crypto.circulating_supply)}</p>
                        <p>${formatCompactNumber(crypto.total_supply)}</p>
                    </div>
                    <div class="meter animate">
                        <span style={marketFiller}><span></span></span>
                    </div>
                </div>


            {/* ${crypto.market_cap.toLocaleString()} */}
            
        </td>
        <td className='sparklines'>
            <Sparklines data={crypto.sparkline_in_7d.price}>
                <SparklinesLine style={{ fill: "none" }} color={
                      crypto.sparkline_in_7d.price[0] >
                      crypto.sparkline_in_7d.price[
                        crypto.sparkline_in_7d.price.length - 1
                      ]
                        ? "#ff0707"
                        : "#2DFF2D"
                    }/>
            </Sparklines>
        </td>
    </tr>
    
    
    );
}

export default TableData;