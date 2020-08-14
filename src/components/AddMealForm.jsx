import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class AddMealForm extends Component {
  constructor() {
    super();
    this.state = {
      showing: false,
      name: '',
      calories: '',
      image: ''
    };
  }

  toggle = () => {
    this.setState({
      showing: !this.state.showing
    });
  };

  handleInputChange = event => {
    const value = event.target.value;
    const property = event.target.name;

    this.setState({
      [property]: value
    });
  };

  handleSubmission = e => {
    e.preventDefault();
    const { name, calories, image } = this.state;
    this.props.addMeal(name, calories, image);
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.toggle}>
          Add Meal
        </button>
        {this.state.showing && (
          <Form action="" onSubmit={this.handleSubmission}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={this.handleInputChange}
                type="text"
                placeholder="Name"
                name="name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Number of Calories</Form.Label>
              <Form.Control
                onChange={this.handleInputChange}
                type="number"
                name="calories"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                onChange={this.handleInputChange}
                type="text"
                placeholder="Image URL"
                name="image"
              />
            </Form.Group>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </Form>
        )}
      </div>
    );
  }
}

export default AddMealForm;
