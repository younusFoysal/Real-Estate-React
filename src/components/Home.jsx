import Banner from "./Banner.jsx";
import Features from "./Features.jsx";
import Properties from "./Properties.jsx";
import Offer from "./Offer.jsx";
import {Helmet} from "react-helmet-async";



const Home = () => {




    return (
        <div>
            <Helmet>SK Real estate | Home </Helmet>
            <Banner></Banner>
            <Features></Features>
            <Properties></Properties>
            <Offer></Offer>


        </div>
    );
};

export default Home;