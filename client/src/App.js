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
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import AdminDash from "./components/AdminDash/AdminDash";
import Order from "./components/Order/Order";
import AllProducts from "./components/Products/AllProducts";
import ProductTotals from "./components/Products/ProductTotals";
import BooksContainer from "./components/BooksContainer";

import "./App.css";
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
          <Route exact path="/books" component={BooksContainer} /> 
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Allproducts" component={AllProducts} />
          <Route exact path="/production" component={ProductTotals} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/order" component={Order} />
            <PrivateRoute exact path="/admindash" component={AdminDash} />
          </Switch>
        </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
