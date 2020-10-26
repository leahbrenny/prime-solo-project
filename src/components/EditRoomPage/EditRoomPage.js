import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';
import './EditRoomPage.css';

class EditRoomPage extends Component {
  state = {
    heading: 'Edit Room',
    newRoom: {
      user_id: this.props.store.user.id,
      room_id: '',
      roomName: '',
    },
  };



  handleSubmit = () => {
    console.log('tried to edit a room');
    this.props.dispatch({ type: 'UPDATE_ROOM', payload: this.state.newRoom });
    this.props.dispatch({type: 'FETCH_ROOMS', payload: this.props.store.user.id})
    this.props.history.push('/rooms');
  };

  handleChangeFor = (propertyName, event) => {
    this.setState({
      newRoom: {
        ...this.state.newRoom,
        // computed property
        [propertyName]: event.target.value,
        room_id: this.props.store.editRoom[0].id,
      },
    });
  };

  render() {
    console.log('edit room initial store and state', this.props, this.state);

    return (
      <div>
        <h2>{this.state.heading}</h2>
        <div className='newRoomForm'>
          <form onSubmit={this.handleSubmit}>
            <div className='oldRoomInfo'>
              {this.props.store.editRoom.map((item) => (
                <p>{item.name}</p>
              ))}
            </div>
            <div className='tooltip'>
              <input className='editInput'
                type='text'
                placeholder='Updated Room Name'
                onChange={(event) => this.handleChangeFor('roomName', event)}
              />
              <span className='tooltiptext'>Edit the name of your room.</span>
            </div>
            <button className='updateRoomBtn' type='submit'>Update Room</button>
          </form>
          <Link to='/rooms'>
          <button className='cancelBtn'>Cancel</button>
        </Link>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(EditRoomPage);
