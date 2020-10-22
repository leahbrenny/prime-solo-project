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
    })
    console.log('searching for', this.state.search)
  };


  onSubmit = () => {
   console.log('tried to search');
   this.props.dispatch({
     type: 'FETCH_SEARCH',
     payload: this.state.search,
   })

  }

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
          <p>Search results go here</p>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(SearchPage);
