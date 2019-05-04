import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
function PrivateRoute ({component: Component, ...rest})  {
    
    return (
        <Route 
            {...rest}
            render={(props) => {
                // eslint-disable-next-line no-unused-expressions
                return rest.auth.singin ? (
                    <Component {...props}/>
                ) : (
                    <Redirect to={{
                        pathname: "/singin",
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