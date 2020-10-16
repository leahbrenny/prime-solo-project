import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './RoomsPage.css';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class RoomsPage extends Component {
  state = {
    heading: 'Rooms Page',
  };
  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_ROOMS',
      payload: `${this.props.store.user.id}`
    })
  }

  render() {
    console.log('rooms page store', this.props.store);

    return (
      <div>
        <h2>{this.state.heading}</h2>
        <div className='roomSelect'>
          <select>
            {this.props.store.room.map( item =>
              <option key={item.id}>{item.room}</option>)}
          </select>
        </div>
        <div className='roomReturn'>
          <p>Room data will go here</p>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RoomsPage);
