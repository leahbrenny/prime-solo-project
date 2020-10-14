import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

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
      <div>
        <h2>{this.state.heading}</h2>
        <ul>
          <li>plant 1</li>
          <li>plant 2</li>
          <li>plant 3</li>
          <li>plant 4</li>
          <li>plant 5</li>
        </ul>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(PlantsPage);
