import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
function PrivateRoute ({component: Component, ...rest})  {
    
    return (
        <Route 
            {...rest}
            render={(props) => {
                const {user} = rest.auth
                return user && user.role === 'admin' ? (
                    <Component {...props}/>
                ) : (
                    <Redirect to={{
                        pathname: "/dasboard",
                        state: { from: props.location.pathname }
                    }} />
                )
            }}
        />
    )
}
 
const mapStateToProps = (state) => { 
    return { 
        auth: state.auth
    }
}
 
export default connect(mapStateToProps)(PrivateRoute);