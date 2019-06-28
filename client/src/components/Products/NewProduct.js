import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class NewProduct extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  render() {
    const { errors } = this.state;

    return (
        <div className="container">
        <div className="row">
          <div className="col s12">
            <h4>
              <b>Whole Baker</b> admin
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col 3">
       
          </div>
        </div>
  
      </div>
    );
  }
}

export default NewProduct;