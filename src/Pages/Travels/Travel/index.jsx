// Travel Component

import React from 'react';
import './travel.scss';
import madrid from '../../../assets/images/madrid.JPG';

function Travel (props) {

    return (
        <figure className="travel">
            <span className="travel-price">
                {parseInt(props.travel.price) + '€'}
            </span>
            <span className="travel-offer">
                Save 20€ pay only
            </span>
            <img className="travel-img" src={madrid} alt="" />
            <figcaption className="travel-name">
                {props.travel.travelname}
            </figcaption>
        </figure>
    );

}

export default Travel;