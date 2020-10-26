import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './RoomsPage.css';
import { Link } from 'react-router-dom';

class RoomsPage extends Component {
  state = {
    heading: 'Rooms Page',
    displayedRoomId: null,
  };

  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_ROOMS',
      payload: this.props.store.user.id
    });
    this.props.dispatch({
      type: 'FETCH_ROOMPLANTS',
      payload: 1,
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
    this.editRoomValues();
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

  deletePlant = (event, id) => {
    console.log('target plant', id);
    if (window.confirm(`are you sure you want to delete this plant?`, id)) {
      console.log('pressed ok');
      this.props.dispatch({
        type: 'DELETE_PLANT',
        payload: id,
      });
    } else {
      console.log('payload', id);
      console.log('pressed cancel');
    }
    this.props.dispatch({
      type: 'FETCH_ROOMPLANTS',
      payload: this.state.displayedRoomId,
    });
  }

  waterPlant = (event, id) => {
   let date = new Date();
   console.log('current date', date);
    if (window.confirm(`Did you want to water this plant?`, id)) {
      console.log('pressed ok');
      this.props.dispatch({
        type: 'WATER_PLANT',
        payload: { 
          id: id, 
          date: date
        }
      });
    } else {
      console.log('payload', id);
      console.log('pressed cancel');
    }
    this.props.dispatch({
      type: 'FETCH_ROOMPLANTS',
      payload: this.state.displayedRoomId,
    });
  }

  editRoomValues = () => {
    this.props.dispatch({
      type: 'FETCH_EDIT_ROOM',
      payload: Number(this.state.displayedRoomId)
    })
  }

  updateEditPlant = (event, id) => {
    this.props.dispatch({
      type: 'FETCH_EDIT_PLANT',
      payload: Number(id)
    })
    // this.props.history.push('/editplant')
    // this.redirectEditPlant();
  }

  // redirectEditPlant = () => {
  //   this.props.history.push('/editplant')
  // }

  render() {
    console.log('rooms page store', this.props.store);
    return (
      <div className="roomPageContainer">
        <h2 className="pageHeading">{this.state.heading}</h2>
        <div className='roomSelect'>
          {this.props.store.room === undefined ? (
            <div>you didn't see anything</div>
          ) : (
            <select className="roomSelectInput" onChange={(event) => this.onRoomChange(event, 'roomId')}>
              {this.props.store.room.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.room}
                </option>
              ))}
            </select>
          )}
          <div>
            <Link to='/newroom'>
              <button className="newRoomBtn">+New Room</button>
            </Link>
            <Link to='/editroom'>
            <button className="editBtn">Edit Room</button>
          </Link>
          <button className="deleteBtn" onClick={() => this.confirmDeleteRoom}>Delete Room</button>
          </div>
        </div>
        <div className='roomReturn'>
          <ul>
            {this.props.store.roomplant.map((item) => (
              <li key={item.id}>
                {' '}
                <img width='200px' src={item.image}></img>
                {item.plant}
                Last watered on: {`${item.last_watered}`.slice(0, 10)}
                <button id="deletePlantBtn" onClick={(event) => this.deletePlant(event, item.id)}>Delete</button>
                <button value={item.id} onClick={(event) => this.updateEditPlant(event, item.id)}>Edit</button>
                <button id="waterPlantBtn" onClick={(event) => this.waterPlant(event, item.id)}>Watered Today</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="editDeleteContainer">
          
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RoomsPage);
