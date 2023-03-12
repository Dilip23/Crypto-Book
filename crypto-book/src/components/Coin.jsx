import '../App.css'
import TableData from './TableData';

const Coin = (props) => {
    const cryptos = props.cryptos
    console.log('cryptos--------',cryptos);

    return(
        <>
        <table className="crypto-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Coin</th>
                    <th>Price</th>
                    <th>1H</th>
                    <th>24H</th>
                    <th>7D</th>
                    <th>24H Volume</th>
                    <th>Market Cap</th>
                    <th>Last 7 Days</th>
                </tr>
            </thead>
            <tbody>
                {cryptos && cryptos.map(crypto => <TableData crypto={crypto}/>)}
            </tbody>
        </table>

        </>

    );
}

export default Coin;