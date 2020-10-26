import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './PlantsPage.css';
import { Link } from 'react-router-dom';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name PlantsPage with the name for the new
// component.
class PlantsPage extends Component {
  state = {
    heading: 'My Plants',
  };

  render() {
    return (
      <div >
        <h2>{this.state.heading}</h2>
        <div className='plantContainer'>
        <div className='plantHeader'>
        <h3>You have {this.props.store.plant.length} plants!</h3>
        <Link to='/newplant'>
          <button className='addPlantBtn'>Add a plant</button>
        </Link>
        </div>
        <ul>
          {this.props.store.plant.map((item) => (
            <div className='singlePlant'>
            <li className='plantList' key={item.id}>
              {' '}
              <img width='200px' height='150px' src={item.image}></img>{' '}
             <div className='plantName'> {item.plant}</div>
              <div>Last watered on:</div> {`${item.last_watered}`.slice(0, 10)}
            </li>
            </div>
          ))}
        </ul>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(PlantsPage);
