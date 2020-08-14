import React, { Component } from 'react';
import './MealBox.css';

class MealBox extends Component {
  render() {
    return (
      <div className="meal border border-grey rounded d-flex align-items-stretch">
        <img
          src={this.props.meal.image}
          className="img-thumbnail mr-3 mw-25 border-0"
          style={{ width: 100 }}
        />
        <div className="media-body align-self-center">
          <h5 className="mt-0 mb-1">{this.props.meal.name}</h5>
          <small>{this.props.meal.calories} cal</small>
        </div>
        <form className="d-flex">
          <input className="border-0 col" type="number" value="0" />
          <button className="btn btn-primary col">+</button>
        </form>
      </div>
    );
  }
}

export default MealBox;
