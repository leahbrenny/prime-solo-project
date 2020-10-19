import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './RoomsPage.css';
import { Link } from 'react-router-dom';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class RoomsPage extends Component {
  state = {
    heading: 'Rooms Page',
    roomId: '',
  };

  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_ROOMS',
      payload: `${this.props.store.user.id}`,
    });
  };

  onRoomChange = (event, property) => {
    console.log('tried to select a room', property, event.target.value);
    this.setState({
      [property]: event.target.value,
    });
    this.displayRoom();
  };

  displayRoom = () => {
    console.log('want to display', this.state);
  };

  confirmDeleteRoom = () => {
    window.confirm('Are you sure you want to delete this room?');
  };

  render() {
    console.log('rooms page store', this.props.store);

    return (
      <div>
        <h2>{this.state.heading}</h2>
        <div className='roomSelect'>
          <select onChange={(event) => this.onRoomChange(event, 'roomId')}>
            {this.props.store.room.map((item) => (
              <option key={item.id} value={item.id}>
                {item.room}
              </option>
            ))}
          </select>
          <div>
            <Link to='/newroom'>
              <button>+New Room</button>
            </Link>
          </div>
        </div>
        <div className='roomReturn'>
          <p>Room data will go here</p>
        </div>
        <div>
          <Link to='/editroom'>
            <button>Edit</button>
          </Link>
          <button onClick={this.confirmDeleteRoom}>Delete</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RoomsPage);
