import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './RoomsPage.css';
import { Link } from 'react-router-dom';
import { FavoriteRounded } from '@material-ui/icons';

class RoomsPage extends Component {
  state = {
    heading: 'Rooms Page',
    displayedRoomId: '',
  };

  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_ROOMS',
    });
  };

  onRoomChange = (event, property) => {
    console.log('tried to select a room', event.target.value);
    this.props.dispatch({
      type: 'FETCH_ROOMPLANTS',
      payload: event.target.value,
    });
    this.setState({
      displayedRoomId: event.target.value,
    });
    this.editRoomValues(event.target.value)
  };

  confirmDeleteRoom = () => {
    if (window.confirm('are you sure you want to delete')) {
      console.log('pressed ok');
      this.props.dispatch({
        type: 'DELETE_ROOM',
        payload: this.state.displayedRoomId,
      });
      this.props.dispatch({
        type: 'FETCH_ROOMS',
      });
    } else {
      console.log('payload', this.state.displayedRoomId);

      console.log('pressed cancel');
    }
  };

  editRoomValues = (roomId) => {
    this.props.dispatch({
      type: 'FETCH_EDIT_ROOM',
      payload: Number(roomId)
    })
  }

  render() {
    console.log('rooms page store', this.props.store);

    return (
      <div>
        <h2>{this.state.heading}</h2>
        <div className='roomSelect'>
          {this.props.store.room === undefined ? (
            <div>you didn't see anything</div>
          ) : (
            <select onChange={(event) => this.onRoomChange(event, 'roomId')}>
              {this.props.store.room.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.room}
                </option>
              ))}
            </select>
          )}
          <div>
            <Link to='/newroom'>
              <button>+New Room</button>
            </Link>
          </div>
        </div>
        <div className='roomReturn'>
          <ul>
            {this.props.store.roomplant.map((item) => (
              <li key={item.id}>
                {' '}
                <img width='200px' src={item.image}></img>
                {item.plant}
                <button value={item.id}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="editDeleteContainer">
          <Link to='/editroom'>
            <button className="editBtn">Edit Room</button>
          </Link>
          <button className="deleteBtn" onClick={this.confirmDeleteRoom}>Delete Room</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RoomsPage);
