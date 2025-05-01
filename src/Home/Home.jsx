import React from 'react';
import Banner from '../Components/Banner/Banner';
import Doctors from '../Pages/Doctors/Doctors';
import { useLoaderData } from 'react-router';
import StatsCounter from '../SetCount/StatsCounter';

const Home = () => {

    const lawersData=useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Doctors lawersData={lawersData}></Doctors>
            <StatsCounter></StatsCounter>
            
        </div>
    );
};

export default Home;