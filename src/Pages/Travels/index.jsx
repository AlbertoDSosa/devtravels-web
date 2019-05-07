// Travels Component

import React from 'react';
import './travels.scss';
import Travel from './Travel'


function Travels (props) {
    
    return (
        <section className="travels-container" id="travels">
            <Travel />
            <Travel />
            <Travel />
            <Travel />
            <Travel />
            <Travel />
        </section>
    );

}

export default Travels;