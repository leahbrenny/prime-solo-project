import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './UserPage.css'

class UserPage extends Component {
 
  render() {
    console.log('trying to find plant', this.props);
    
    return (
      <div>
        <h1 className='welcome'>
          Welcome {this.props.store.user.username}, to your Planter!
        </h1>
        
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
