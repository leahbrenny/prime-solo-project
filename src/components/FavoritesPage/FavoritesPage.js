import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class FavoritesPage extends Component {
  state = {
    heading: 'Favorites',
  };

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <ul>
          <li>favorite plant 1 <button>Unfavorite</button></li>
          <li>favorite plant 2 <button>Unfavorite</button></li>
          <li>favorite plant 3 <button>Unfavorite</button></li>
          <li>favorite plant 4 <button>Unfavorite</button></li>
        </ul>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(FavoritesPage);
