import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { loginUser } from "../../actions/authActions";
// import classnames from "classnames";
import Toast from "../Toast/Toast";
import "./style.css";

class Order extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

//   componentDidMount() {
//     // If logged in and user navigates to Login page, should redirect them to dashboard
//     if (this.props.auth.isAuthenticated) {
//       this.props.history.push("/dashboard");
//     }
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.auth.isAuthenticated) {
//       this.props.history.push("/dashboard");
//     }

//     if (nextProps.errors) {
//       this.setState({
//         errors: nextProps.errors
//       });
//     }
//   }

//   onChange = e => {
//     this.setState({ [e.target.id]: e.target.value });
//   };

//   onSubmit = e => {
//     e.preventDefault();

//     const userData = {
//       email: this.state.email,
//       password: this.state.password
//     };

//     this.props.loginUser(userData);
//   };

  render() {
    const { errors } = this.state;

    return (
        <div className="container">
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
            <img class="activator" src="images/office.jpg"></img>
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
            <img class="activator" src="images/office.jpg"></img>
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
            <img class="activator" src="images/office.jpg"></img>
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
            <img class="activator" src="images/office.jpg"></img>
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
  
      </div>
    );
  }
}
// Login.propTypes = {
//   loginUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };
// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// });
export default Order;