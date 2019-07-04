import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class Recipes extends Component {
  // Setting our component's initial state
  state = {
    recipes: [],
    bread: "",
    description: ""
  };

  // When the component mounts, load all Recipes and save them to this.state.Recipes
  componentDidMount() {
    this.loadRecipes();
  }

  // Loads all Recipes  and sets them to this.state.Recipes
  loadRecipes = () => {
    API.getRecipes()
      .then(res =>
        this.setState({ recipes: res.data, bread: ""})
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads Recipes from the db
  deleteRecipe = id => {
    API.deleteRecipe(id)
      .then(res => this.loadRecipes())
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Recipes On My List</h1>
            </Jumbotron>
            {Recipes.length ? (
              <List>
                {Recipes.map(recipes => {
                  return (
                    <ListItem key={Recipes._id}>
                        <strong>
                          {Recipes.bread}
                        </strong>
                        <p>

                        </p>
                      <DeleteBtn onClick={() => this.deleteRecipe(Recipes._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>There are no saved Recipes yet.</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Recipes;
