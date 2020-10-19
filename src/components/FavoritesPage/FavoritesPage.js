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

  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_FAVORITES',
      payload: `${this.props.store.user.id}`,
    });
  };

  render() {
    console.log('redux state on favorites', this.props.store);
    
    return (
      <div className="container">
        <h2>{this.state.heading}</h2>
        <ul>
        {this.props.store.favorite.map( item =>
            <li key={item.id}> <img width="200px" src={item.image}></img> Plant {item.plant}<FavoriteIcon className="favorite"/></li>)}
            </ul>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(FavoritesPage);
