import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class EditRoomPage extends Component {
  state = {
    heading: 'Edit Room',
    editRoom: {
      roomName: '',
      sunlight: '',
      humidity: '',
    },
  };

  handleSubmit = () => {
    console.log('tried to edit a room');
  };

  handleChangeFor = (propertyName, event) => {
    this.setState({
      newRoom: {
        ...this.state.editRoom,
        // computed property
        [propertyName]: event.target.value,
      },
    });
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
          <button type='submit'>Update Room</button>
        </form>
        <Link to='/rooms'>
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(EditRoomPage);
