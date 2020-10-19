import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class NewRoomPage extends Component {
  state = {
    heading: 'Add A New Room',
  };

  handleSubmit = () => {
      console.log('tried to make a new room');
  }

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Room Name"/>
        <input type="number" placeholder="Sunlight"/>
        <input type="number" placeholder="Humidity"/>
        <button type="submit">Create Room</button>
        </form>
        <Link to='/rooms'>
        <button>Cancel</button>
        </Link>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NewRoomPage);