import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Toast from "../Toast/Toast";
import "./style.css";

class Order extends Component {
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
                You are logged into <b>WholeBaker</b>
              </p>
            </h4>
            <button
              onClick={this.onLogoutClick}
              className="btn"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <h4>
              <b>Order</b> below
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col 3">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">Card Title<i
                class="material-icons right">more_vert</i></span>
            <p><a href="#">This is a link</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
            <p>Here is some more information about this product that is only revealed once clicked on. Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>
          </div>
          <div className="col 3">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">Card Title<i
                class="material-icons right">more_vert</i></span>
            <p><a href="#">This is a link</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>
          </div>
          <div className="col 3">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">Card Title<i
                class="material-icons right">more_vert</i></span>
            <p><a href="#">This is a link</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>
          </div>
          <div className="col 3">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">Card Title<i
                class="material-icons right">more_vert</i></span>
            <p><a href="#">This is a link</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>
          </div>

        <Toast></Toast>
        </div>
        <button
              onClick={this.onLogoutClick}
              className="btn"
            >
              Logout
            </button>
      </div>
    );
  }
}

Order.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Order);