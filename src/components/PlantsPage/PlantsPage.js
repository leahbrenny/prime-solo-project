import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './PlantsPage.css'

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name PlantsPage with the name for the new
// component.
class PlantsPage extends Component {
  state = {
    heading: 'Plants',
  };

  render() {
    return (
      <div className="container">
        <h2>{this.state.heading}</h2>
        <ul>
        {this.props.store.plant.map( item =>
            <li key={item.id}> <img width="200px" src={item.image}></img> Plant {item.plant}</li>)}
            </ul>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(PlantsPage);
