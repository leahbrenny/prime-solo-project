import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

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
      <select>
        <option>{this.props.store.user.id}</option>
      </select>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RoomsPage);