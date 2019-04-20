// SocialIcon Component

import React from 'react';
import './social-icon.scss';
const SocialIcon = (props) => {
    const style = {
        backgroundColor: props.bcolor
    }

    return (
        <i 
            className = {`icon icon-${props.iconName} social-icon`}
            style = {style}
        ></i>
    );
}

export default SocialIcon;
