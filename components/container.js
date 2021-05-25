import Head from 'next/Head';
import Navbar from './navbar';

const Container = (props) => {

    return (

        <div>
            <Head>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.1/css/all.css"></link>
                <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
            </Head>
            <Navbar />
            <div className="container mx-auto text-center mt-10">
                {props.children}
            </div>
        </div>

    )

}

export default Container;