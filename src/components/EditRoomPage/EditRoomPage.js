import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';
import '../NewRoomPage/NewRoomPage.css';

class EditRoomPage extends Component {
  state = {
    heading: 'Edit Room',
    newRoom: {
      user_id: this.props.store.user.id,
      room_id: '',
      roomName: '',
      // sunlight: '',
      // humidity: '',
    },
  };

  handleSubmit = () => {
    console.log('tried to edit a room');
    this.props.dispatch({ type: 'UPDATE_ROOM', payload: this.state.newRoom });
    this.props.dispatch({type: 'FETCH_ROOMS', payload: this.props.store.user.id})
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
              <input
                type='text'
                placeholder='Updated Room Name'
                onChange={(event) => this.handleChangeFor('roomName', event)}
              />
              <span className='tooltiptext'>Edit the name of your room.</span>

              {/* add back in for humidity and sunlight edit */}
              {/* </div>
            <div className="oldRoomInfo">
          {this.props.store.editRoom.map((item) => (
                  <p>{item.sunlight}</p>))}
            </div>
            <div className='tooltip'>
              <input
                min='0'
                max='10'
                type='number'
                placeholder='Updated Sunlight'
                defaultValue={this.props.store.editRoom.sunlight}
                onChange={(event) => this.handleChangeFor('sunlight', event)}
              />
              <span className='tooltiptext'>
              Sunlight can be a value from 0 to 10 for how bright
                your room is.
              </span>
            </div>
            <div className="oldRoomInfo">
          {this.props.store.editRoom.map((item) => (
                  <p>{item.humidity}</p>))}
            </div>
            <div className='tooltip'>
              <input
                min='0'
                max='100'
                type='number'
                placeholder='Updated Humidity'
                onChange={(event) => this.handleChangeFor('humidity', event)}
              />
              <span className='tooltiptext'>
              Humidity is a percent from 0% to 100%.
              </span> */}
            </div>
            <button type='submit'>Update Room</button>
          </form>
        </div>
        <Link to='/rooms'>
          <button className='cancelBtn'>Cancel</button>
        </Link>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(EditRoomPage);
