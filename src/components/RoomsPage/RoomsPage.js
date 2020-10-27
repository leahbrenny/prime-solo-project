import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './RoomsPage.css';
import { Link } from 'react-router-dom';

class RoomsPage extends Component {
  state = {
    heading: 'My Rooms',
    displayedRoomId: '',
  };

  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_ROOMS',
      payload: this.props.store.user.id,
    });
    this.props.dispatch({
      type: 'FETCH_ROOMPLANTS',
      payload: 1,
    });
  };

  onRoomChange = (event, roomId) => {
    console.log('tried to select a room', event.target.value);
    this.props.dispatch({
      type: 'FETCH_ROOMPLANTS',
      payload: event.target.value,
    });
    this.props.dispatch({
      type: 'FETCH_EDIT_ROOM',
      payload: Number(event.target.value),
    });
  };

  confirmDeleteRoom = () => {
    if (window.confirm('are you sure you want to delete')) {
      console.log('pressed ok');
      this.props.dispatch({
        type: 'DELETE_ROOM',
        payload: this.props.store.editRoom[0].id,
      });
      this.props.dispatch({
        type: 'FETCH_ROOMS',
      });
    } else {
      console.log('payload', this.props.store.editRoom[0].id);

      console.log('pressed cancel');
    }
    this.componentDidMount();
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
    this.componentDidMount();
  };

  waterPlant = (event, id) => {
    let date = new Date();
    console.log('current date', date);
    if (window.confirm(`Did you want to water this plant?`, id)) {
      console.log('pressed ok');
      this.props.dispatch({
        type: 'WATER_PLANT',
        payload: {
          id: id,
          date: date,
        },
      });
    } else {
      console.log('payload', id);
      console.log('pressed cancel');
    }
    this.props.dispatch({
      type: 'FETCH_ROOMPLANTS',
      payload: this.state.displayedRoomId,
    });
    this.componentDidMount();
  };

  editRoomValues = () => {
    this.props.dispatch({
      type: 'FETCH_EDIT_ROOM',
      payload: Number(this.state.displayedRoomId),
    });
  };

  updateEditPlant = async (event, plantid) => {
    console.log('id', plantid);
    
   await this.props.dispatch({
      type: 'FETCH_EDIT_PLANT',
      payload: Number(plantid),
    });
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    this.redirectEditPlant(result);
  };

  redirectEditPlant = () => {
    this.props.history.push('/editplant')
  }

  render() {
    console.log('rooms page store', this.props.store);
    return (
      <div className='roomPageContainer'>
        <h2 className='pageHeading'>{this.state.heading}</h2>
        <div>
        <div className='roomSelect'>
          {this.props.store.room === undefined ? (
            <div>you didn't see anything</div>
          ) : (
            <select
              className='roomSelectInput'
              onChange={(event) => this.onRoomChange(event, this.value)}
            >
              {this.props.store.room.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.room}
                </option>
              ))}
            </select>
          )}
          </div>
          
            <Link to='/newroom'>
              <button className='newRoomBtn'>+New Room</button>
            </Link>
            <Link to='/editroom'>
              <button className='editBtn'>Edit Room</button>
            </Link>
            <button
              className='deleteBtn'
              onClick={(event) => this.confirmDeleteRoom(event)}
            >
              Delete Room
            </button>
          </div>
        <div className='roomReturn'>
          <ul>
            {this.props.store.roomplant.map((item) => (
              <div className='singleRoomPlant'>
                <li key={item.id} className='plantList'>
                  <button
                    id='deletePlantBtn'
                    className='deletePlantBtn'
                    onClick={(event) => this.deletePlant(event, item.id)}
                  >
                    Delete
                  </button>
                  <img width='200px' height='150px' src={item.image}></img>
                  <div className='plantName'> {item.plant}</div>
                  <div>Last watered on:</div>{' '}
                  {`${item.last_watered}`.slice(0, 10)}
                  <div className='plantBtns'>
                    <button
                      className='roomPlantEditBtn'
                      value={item.id}
                      onClick={(event) => this.updateEditPlant(event, item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className='roomPlantWaterBtn'
                      id='waterPlantBtn'
                      onClick={(event) => this.waterPlant(event, item.id)}
                    >
                      Watered
                    </button>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div className='editDeleteContainer'></div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RoomsPage);
