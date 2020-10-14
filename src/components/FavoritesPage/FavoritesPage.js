import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './FavoritesPage.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

class FavoritesPage extends Component {
  state = {
    heading: 'Favorites',
  };

  render() {
    return (
      <div className="container">
        <h2>{this.state.heading}</h2>
        <ul>
          <li>favorite plant 1 <button className="favorite"><FavoriteIcon>Heart</FavoriteIcon></button></li>
          <li>favorite plant 2 <button className="favorite">Heart</button></li>
          <li>favorite plant 3 <button className="favorite">Heart</button></li>
          <li>favorite plant 4 <button className="favorite">Heart</button></li>
        </ul>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(FavoritesPage);
