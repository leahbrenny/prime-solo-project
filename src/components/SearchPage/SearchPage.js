import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './SearchPage.css';

class SearchPage extends Component {
  onRoomChange = (event, property) => {
    console.log('tried to select a room', event.target.value);
    this.setState({
      newPlant: {
        ...this.state.newPlant,
        roomId: event.target.value,
      },
    });
  };

  pullNewPlant = (event) => {
    console.log(
      'plantId and room',
      event.target.value,
      this.state.newPlant.roomId
    );
    this.setState({
      newPlant:{
        ...this.state.newPlant,
        plantId: event.target.value
      }
    })
    this.props.dispatch({
      type: 'FETCH_NEW_PLANT',
      payload: event.target.value
    })
    if (window.confirm('added plant to room')) {
      console.log('pressed ok', this.props.store.newplant, this.state.newPlant.roomId);
    } else {
      console.log('pressed cancel');
    }
  };

  postNewPlant() {
    console.log('it has been a second');
    
  }

  onSearchChange = (event, property) => {
    this.setState({
      search: event.target.value,
    });
    console.log('searching for', this.state.search);
  };

  onSubmit = () => {
    console.log('tried to search');
    this.props.dispatch({
      type: 'FETCH_SEARCH',
      payload: this.state.search,
    });
  };

  state = {
    heading: 'Plant Search',
    search: '',
    newPlant: {
      roomId: '',
      plantId: '',
    },
  };

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <div className='searchBar'>
          <form onSubmit={this.onSubmit}>
            <input
              className='searchField'
              type='search'
              placeholder='What are you looking for?'
              onChange={(event) => this.onSearchChange(event, 'searchQuery')}
            />
            <button className='searchButton' type='submit'>
              Search
            </button>
          </form>
        </div>
        <div className='searchResultBody'>
          {this.props.store.search.data === undefined ? (
            <div></div>
          ) : (
            <ul className='searchList'>
              {this.props.store.search.data.map((item) => (
                <li className='searchItem' key={item.id} value={item.id}>
                  <img src={item.image_url} />
                  {item.common_name}
                  <select
                    onChange={(event) => this.onRoomChange(event, 'roomId')}
                  >
                    {this.props.store.room.map((room) => (
                      <option key={room.id} value={room.id}>
                        {room.room}
                      </option>
                    ))}
                  </select>
                  <button value={item.id} onClick={this.pullNewPlant}>
                    Add to room
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(SearchPage);
