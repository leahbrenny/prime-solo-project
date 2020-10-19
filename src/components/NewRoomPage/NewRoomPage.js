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
    newRoom: {
      roomName: null,
      sunlight: null,
      humidity: null,
    },
  };

  handleSubmit = () => {
    console.log('tried to make a new room');
  };

  handleHumidityChange = (event) => {
    console.log('tried to change humidity to', event.target.value);
  };

  handleSunlightChange = (event) => {
    console.log('tried to change sunlight to', event.target.value);
  };

  handleRoomNameChange = (event) => {
    console.log('tried to change room name to', event.target.value);
  };

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Room Name'
            onChange={this.handleRoomNameChange}
          />
          <input
            min='0'
            max='10'
            type='number'
            placeholder='Sunlight'
            onChange={this.handleSunlightChange}
          />
          <input
            min='0'
            max='100'
            type='number'
            placeholder='Humidity'
            onChange={this.handleHumidityChange}
          />
          <button type='submit'>Create Room</button>
        </form>
        <Link to='/rooms'>
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NewRoomPage);
