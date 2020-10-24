import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './UserPage.css'

class UserPage extends Component {
 
  render() {
    console.log('trying to find plant', this.props);
    
    return (
      <div className='userContainer'>
        <h1 className='welcome'>
        {this.props.store.user.username} Welcome to your Planter!
        </h1>
        
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
