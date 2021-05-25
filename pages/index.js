import Container from '../components/container';
import Cryptos from '../components/cryptos';
import fetch from 'isomorphic-fetch';

import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; 

Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());

const Index = (props) => {

    return (

        <Container>
            <h2><b>Today's Cryptocurrency Prices by Market Cap</b></h2>
            <h4 className="text-muted">Click on one coin to check it!</h4>
            <br />
            <Cryptos coins={props.crypto}></Cryptos>
        </Container>

    )
}

Index.getInitialProps = async () => {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    const resJSON = await res.json();

    return { crypto: resJSON }
}


export default Index;