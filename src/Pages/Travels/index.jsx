// Travels Component

import React from 'react';
import './travels.scss';
import Travel from './Travel'


function Travels (props) {
    
    return (
        <div className="travels-container" id="travels">
            <Travel />
            <Travel />
            <Travel />
            <Travel />
            <Travel />
            <Travel />
        </div>
    );

}

export default Travels;