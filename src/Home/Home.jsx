import React from 'react';
import Banner from '../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import StatsCounter from '../SetCount/StatsCounter';
import Lawyers from '../Pages/Lawyers/Lawyers';

const Home = () => {

    const lawersData=useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Lawyers lawersData={lawersData}></Lawyers>
            <StatsCounter></StatsCounter>
            
        </div>
    );
};

export default Home;