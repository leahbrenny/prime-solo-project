import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './SearchPage.css';

// const fetch = require('node-fetch');
// const apiUrl = `https://trefle.io/api/v1/plants?token=${token}`
// const token = process.env.YOUR_TREFLE_TOKEN
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name SearchPage with the name for the new
// component.

class SearchPage extends Component {
  // componentDidMount() {
  //   (async () => {
  //     const response = await fetch(apiUrl);
  //     const json = await response.json();
  //     console.log(json);
  //   })();
  // }

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
                <li className="searchItem" key={item.id} value={item.id}>
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
                  <button value={item.id}>Add to room</button>
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
