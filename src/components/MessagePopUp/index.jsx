// MesaggePopUp Component

import React from 'react';

function MessagePopUp (props) {
    return (
        <div className="msg-popup">
            <h2>
                { props.auth.message }
            </h2>
        </div>
    );
}

export default MessagePopUp;
