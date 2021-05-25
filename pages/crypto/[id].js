import Container from '../../components/container';
import Link from 'next/link';

import TradingViewWidget from 'react-tradingview-widget';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";


const Crypto = (props) => {

    const symbol = "BINANCE:" + props.crypto.symbol + "USDT";


    const checkPrice = (coinPrice) => {
        if (coinPrice > 0) {
            return <p class="text-3xl font-bold text-green-800">+ {coinPrice} %</p>
        }
        else if (coinPrice < 0) {
            return <p class="text-3xl font-bold text-red-800">{coinPrice} %</p>
        }
        else {
            return <p class="text-3xl font-bold text-gray-800">{coinPrice} %</p>
        }
    }

    return (
        <Container>

            <div class="max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8">
                <div class="sm:flex sm:space-x-4">
                    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                        <div class="bg-white p-5">
                            <div class="sm:flex sm:items-start">
                                <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                    <h3 class="text-sm leading-6 font-medium text-gray-400">Current Price</h3>
                                    <p class="text-3xl font-bold text-black">$ {props.crypto.market_data.current_price.usd}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                        <div class="bg-white p-5">
                            <div class="sm:flex sm:items-start">
                                <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                    <h3 class="text-sm leading-6 font-medium text-gray-400">Avg. 24h %</h3>
                                    {checkPrice(props.crypto.market_data.price_change_percentage_24h)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                        <div class="bg-white p-5">
                            <div class="sm:flex sm:items-start">
                                <div class="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                    <h3 class="text-sm leading-6 font-medium text-gray-400">Market Cap Rank</h3>
                                    <p class="text-3xl font-bold text-black">{props.crypto.market_cap_rank}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mx-auto">
                    <img className="h-10 w-10 rounded-full" src={props.crypto.image.large} alt="" />
                    <h1>{props.crypto.name}</h1>
                </div>
                <TradingViewWidget symbol={symbol} />

                <hr style={{ marginTop: '1rem', marginBottom: '1rem', border: '0', borderTop: '2px solid rgba(0,0,0,0.1)' }}>
                </hr>

                <div className="row">
                    <div className="col">
                        <p className="text-muted">Description</p>
                        <p dangerouslySetInnerHTML={{ __html: props.crypto.description.en }}></p>
                    </div>
                </div>
            </div>
        </Container >
    )

}

Crypto.getInitialProps = async (ctx) => {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${ctx.query.id}`);
    const resJSON = await res.json();

    return { crypto: resJSON }
    console.log(crypto);
}

export default Crypto;