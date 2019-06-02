// TravelItem Component

import React from 'react'
import './travel-item.scss'
import Icon from  '../../../components/Icon';

function TravelItem (props) {
    return (
       <div className="travelItem">
            <div>{props._id}</div>
            <div>{props.travelname}</div>
            <div>{props.date}</div>
            <div>{props.description}</div>
            <div>{props.price}</div>
            <div>20€ de descuento</div>
            <div><Icon iconName="eye" /></div>
            <div><Icon iconName="checkmark" /></div>
            <div><Icon iconName="pencil" /></div>
            <div><Icon iconName="bin" /></div>
       </div> 
    )
}

export default TravelItem