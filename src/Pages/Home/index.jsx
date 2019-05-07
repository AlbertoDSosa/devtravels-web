import React from 'react';
import useHash from '../../Hooks/useHash';

import Hero from './Hero';
import Travels from '../Travels';

function Home(props) {
    
    useHash();
    
    return (
        <div className="home-container">
            <Hero />
            <Travels />
        </div>
    );
}

export default Home;