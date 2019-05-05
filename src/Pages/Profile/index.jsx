import React from 'react';
import './profile.scss';
import { connect } from 'react-redux';

function Profile (props) {
    const {email, username} = props.auth.user;
    return (
        <div className="profile-container">
            <h1>Profile</h1>
            <p>Nombre de usuario: {username}</p>
            <p>Email: {email}</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
}

export default connect(mapStateToProps)(Profile);