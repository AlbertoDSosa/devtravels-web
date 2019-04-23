// Travels Component

import React from 'react';
import './travels.scss';
import Travel from './Travel'


class Travels extends React.Component {
    render(){
        return (
            <div className="travels-container" id="travels">
                <div className="row">
                    <Travel />
                    <Travel />
                    <Travel />
                </div>
                <div className="row">
                    <Travel />
                    <Travel />
                    <Travel />
                </div>
                <div className="row">
                    <Travel />
                    <Travel />
                    <Travel />
                </div>
            </div>
        );
    }
}

export default Travels;