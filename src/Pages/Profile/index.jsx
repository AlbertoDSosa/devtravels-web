import React from 'react';
import './profile.scss';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {getProfile} from '../../Request/profile'

class Profile extends React.Component {
    
    state = {
        profile: null,
        user: this.props.auth.user,
        token: this.props.auth.token
    }
    
    componentDidMount(){
        const {token, user} = this.state

        getProfile(user._id, token)
            .then((prof) => {
                this.setState({
                    profile: prof
                });
            });
    }
    render(){
        const { user, profile } = this.state;

        return (
            <div className="profile-container">
                <h1>Perfil</h1>
                <img src={profile && profile.image} alt="avatar" width="150"/>
                <p>Nombre de usuario: {user.username}</p>
                <p>Email: {user.email}</p>
                {
                    !user.role === 'admin' ? '':
                    <Link to="/dashboard">
                        Ir al Dashboard
                    </Link>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
}

export default connect(mapStateToProps)(Profile);