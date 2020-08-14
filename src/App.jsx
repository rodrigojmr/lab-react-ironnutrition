import React, { Component } from 'react';
import './App.scss';

import meals from './meals';
import Mealbox from './components/MealBox';
import AddMealForm from './components/AddMealForm';
import Search from './components/Search';

class App extends Component {
  constructor() {
    super();
    const storedMeals = this.loadMeals();
    this.state = {
      meals: storedMeals || meals
    };
  }

  addMeal = (name, calories, image) => {
    const meal = {
      name,
      calories,
      image,
      quantity: 0
    };
    const mealsClone = [...this.state.meals, meal];
    this.setState({
      meals: mealsClone
    });
    this.saveMeals(mealsClone);
  };

  saveMeals = meals => {
    const mealsAsJSON = JSON.stringify(meals);
    window.localStorage.setItem('meals', mealsAsJSON);
  };

  loadMeals = () => {
    const mealsAsJSON = window.localStorage.getItem('meals');
    const meals = JSON.parse(mealsAsJSON);
    return meals;
  };

  handleSearch = value => {
    const mealsToFilter = this.loadMeals() || this.state.meals;
    if (value === '') {
      this.setState({
        meals: this.loadMeals() || meals
      });
    } else {
      const filteredMeals = mealsToFilter.filter(meal =>
        meal.name.toLowerCase().includes(value.toLowerCase())
      );
      this.setState({
        meals: filteredMeals
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Iron Nutrition</h1>
        <Search handleSearch={this.handleSearch} />
        <AddMealForm addMeal={this.addMeal} />
        <div className="meals">
          {this.state.meals.map(meal => {
            return <Mealbox key={meal.image} meal={meal} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
