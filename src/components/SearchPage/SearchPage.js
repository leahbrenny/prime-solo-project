import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './SearchPage.css';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name SearchPage with the name for the new
// component.
class SearchPage extends Component {
  state = {
    heading: 'Plant Search',
  };

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <div className= "searchBar">
          <input className= "searchField" type='search' placeholder='What are you looking for?' />
          <button className= "searchButton" type='submit'>Search</button>
        </div>
        <div className="searchResultBody">
        <p>Search results go here</p>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(SearchPage);
