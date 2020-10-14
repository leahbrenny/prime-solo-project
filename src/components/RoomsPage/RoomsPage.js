import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './RoomsPage.js';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class RoomsPage extends Component {
  state = {
    heading: 'Rooms Page',
  };

  render() {
    console.log('rooms page store', this.props);
    
    return (
      <div>
        <h2>{this.state.heading}</h2>
      <select className= "roomSelect">
        <option>Room 1</option>
        <option>Room 2</option>
        <option>Room 3</option>
        <option>Room 4</option>
      </select>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RoomsPage);