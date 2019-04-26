import React, {useEffect, useState } from 'react';

import Hero from './Hero';
import Travels from '../Travels';

function Home(props) {
    
    const [hash, setHash] = useState('');
    let actualHash = props.history.location.hash;

    if(actualHash !== hash) {
        setHash(actualHash);
    }

    useEffect(()=>{
        let el = hash && document.querySelector(hash);
        el && el.scrollIntoView();
    }, [hash]);

    return (
        <div className="home-container" id="home">
            <Hero />
            <Travels />
        </div>
    );
}

export default Home;