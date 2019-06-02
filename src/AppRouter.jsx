import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './Routes/PrivateRoute';
import AdminRoute from './Routes/AdminRoute';
import Profile from './Pages/Profile';
import Layout from './Pages/Layout';
import SingIn from './Pages/SingIn';
import SingUp from './Pages/SingUp';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Error404 from './Pages/Err404';


function AppRouter(props) {
  
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/singin" exact component={SingIn} />
            <Route path="/singup" exact component={SingUp} />
            <PrivateRoute path="/profile" exact component={Profile} />
            <AdminRoute path="/dashboard" exact component={Dashboard} />
            <Route path="*" component={Error404} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default AppRouter;
