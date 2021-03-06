import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import DeleteBtn from "../DeleteBtn";
import API from "../../utils/API";
import { List, ListItem, Card } from "../List";
import { ReactComponent as Guinness } from "../../Images/Guinness.png"
import { Input, TextArea, FormBtn } from "../Form";

class NewProduct extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  // Setting our component's initial state
  state = {
    recipes: [],
    title: "",
    price: "",
    inventory: "",
    description: ""
  };

  // When the component mounts, load all recipes and save them to this.state.recipes
  componentDidMount() {
    this.loadRecipes();
  }

  // Loads all recipes  and sets them to this.state.recipes
  loadRecipes = () => {
    API.getRecipes()
      .then(res =>
        this.setState({ recipes: res.data, title: "", price: "", description: "", inventory: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a recipe from the database with a given id, then reloads recipes from the db
  deleteRecipe = id => {
    API.deleteRecipe(id)
      .then(res => this.loadRecipes())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveRecipe method to save the recipe data
  // Then reload recipes from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.price) {
      API.saveRecipe({
        title: this.state.title,
        price: this.state.price,
        description: this.state.description,
        inventory: this.state.inventory
      })
        .then(res => this.loadRecipes())
        .catch(err => console.log(err));
    }
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div className="container">
      <div className="row">
      <div className="col s12">
      <h1><b>new</b> Order</h1>

            </div>
          </div>
          <div className="row">
              {this.state.recipes.length ? (
                <List>
                  {this.state.recipes.map(recipe => {
                    return (
                      <ListItem key={recipe._id}>
                        <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src={Guinness}></img>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                <h3>No Results to Display</h3>
                )}
            
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

  NewProduct.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(NewProduct);