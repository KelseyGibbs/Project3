import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./style.css";

class AdminDash extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div className="container">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name}
              <p className="flow-text grey-text text-darken-1">
                You are logged into <b>WholeBaker</b> as an <b>Admin</b>
              </p>
            </h4>
            <button
              onClick={this.onLogoutClick}
              className="btn"
            >
              Logout
            </button>
            
            <div class="row space">
    <div class="col s4">
      <div class="card-panel teal">
        <span class="white-text">
        <a href="/register"><h3>Customers</h3></a>
        </span>
      </div>
    </div>
    <div class="col s4">
      <div class="card-panel teal">
        <span class="white-text"> 
        <a href="/allproducts"><h3>Products</h3></a>
        </span>
      </div>
    </div>
    <div class="col s4">
      <div class="card-panel teal">
        <span class="white-text"> 
        <a href="/Production"><h3>Production</h3></a>
        </span>
      </div>
    </div>
  </div>
          
          </div>
        </div>
      </div>
    );
  }
}

AdminDash.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(AdminDash);