import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

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