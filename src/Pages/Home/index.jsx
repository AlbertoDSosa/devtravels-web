import React from 'react';
import Hero from '../Hero';
import Travels from '../Travels';

function Home(props) {
    console.log(props.history.location.hash)
    return (
        <div className="home">
            <Hero />
            <Travels />
        </div>
    );
}

export default Home;