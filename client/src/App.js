import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRouteAdmin";
import Dashboard from "./components/dashboard/Dashboard";
import AdminDash from "./components/AdminDash/AdminDash";
import Order from "./components/Order/Order";
import NewProduct from "./components/Products/NewProduct";

import Recipes from "./pages/Recipes";

import "./App.css";
import PrivateRouteAdmin from "./components/private-route/PrivateRouteAdmin";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>

            <PrivateRouteAdmin exact path="/dashboard" component={Dashboard} />
            <PrivateRouteAdmin exact path="/order" component={Order} />


            <PrivateRoute exact path="/admindash" component={AdminDash} />
            <PrivateRoute exact path="/recipes" component={Recipes} />
            <PrivateRoute exact path="/newproduct" component={NewProduct} />
          </Switch>
        </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
