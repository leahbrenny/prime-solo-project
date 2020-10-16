import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class UserPage extends Component {

  render() {
    console.log('trying to find plant', this.props);
    
    return (
      <div>
        <h1 id="welcome">Welcome {this.props.store.user.username}, to your Planter!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
        <h3>Your Plants</h3>
        <ul>
          {this.props.store.plant.map( item =>
            <li key={item.id}> <img width="200px" src={item.image}></img> Plant {item.plant}</li>)}
        </ul>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
