// Icon Component

import React from 'react';
import './icon.scss';
function Icon(props) {
    return (
        <i 
            className = {`icon icon-${props.iconName}`}
            style={props.style}
        >
        </i>
    );
}

export default Icon;