// SocialIcon Component

import React from 'react';
import Icon from '../Icon';

function SocialIcon (props) {
    const style = {
        backgroundColor: props.bcolor,
        borderRadius: '50%',
        padding: '0.4em'
    }

    return (
        <Icon style={style} iconName={props.iconName}/>
    );
}

export default SocialIcon;
