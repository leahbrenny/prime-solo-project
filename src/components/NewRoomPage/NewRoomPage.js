import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';
import './NewRoomPage.css';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class NewRoomPage extends Component {
  state = {
    heading: 'Add A New Room',
    newRoom: {
      user_id: this.props.store.user.id,
      roomName: '',
    },
  };

  handleSubmit = () => {
    console.log('tried to make a new room', this.state.newRoom);
    this.props.dispatch({ type: 'ADD_ROOM', payload: this.state.newRoom });
    this.props.history.push('/rooms')
  };

  handleChangeFor = (propertyName, event) => {
    this.setState({
      newRoom: {
        ...this.state.newRoom,
        // computed property
        [propertyName]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <div className='newRoomForm'>
          <form onSubmit={this.handleSubmit}>
            <div className='tooltip'>
              <input
                type='text'
                placeholder='Room Name'
                onChange={(event) => this.handleChangeFor('roomName', event)}
              />
              <span class='tooltiptext'>
                Enter the name of the room you want to create
              </span>
            </div>
            <button type='submit'>Create Room</button>
          </form>
        <Link to='/rooms'>
          <button className='cancelBtn'>Cancel</button>
        </Link>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NewRoomPage);
