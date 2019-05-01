import React from 'react';
import useHash from '../../Hooks/useHash';
import Hero from './Hero';
import Travels from '../Travels';

function Home(props) {
    
    let actualHash = props.history.location.hash;

    useHash(actualHash);
    
    return (
        <div className="home-container" id="home">
            <Hero />
            <Travels />
        </div>
    );
}

export default Home;