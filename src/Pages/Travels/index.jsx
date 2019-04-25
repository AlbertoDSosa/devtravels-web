// Travels Component

import React from 'react';
import './travels.scss';
import Travel from './Travel'


class Travels extends React.Component {
    render(){
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
}

export default Travels;