import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';
import './EditPlantPage.css';

class EditPlantPage extends Component {
  state = {
    heading: 'Edit Plant',
    newPlant: {
      user_id: this.props.store.user.id,
      plant_id: '',
      plant_name: '',
      plant_img: '',
      last_watered: '',
    },
  };

  handleSubmit = () => {
    console.log('tried to edit a plant');
    this.props.dispatch({ type: 'UPDATE_PLANT', payload: this.state.newPlant });
    this.props.history.push('/rooms');
  };

  handleChangeFor = (propertyName, event) => {
    this.setState({
      newPlant: {
        ...this.state.newPlant,
        // computed property
        [propertyName]: event.target.value,
        plant_id: this.props.store.editPlant[0].id,
      },
    });
  };

  render() {
    console.log('edit room initial store and state', this.props, this.state);

    return (
      <div>
        <h2>{this.state.heading}</h2>
        <div className='editPlantForm'>
          <form onSubmit={this.handleSubmit}>
            <div className='oldPlantInfo'>
              {this.props.store.editPlant.map((item) => (
                <p>{item.name}</p>
              ))}
            </div>
            <div className='tooltip'>
              <input
                type='text'
                placeholder='Updated Plant Name'
                onChange={(event) => this.handleChangeFor('plant_name', event)}
              />
              <span className='tooltiptext'>Edit the name of your plant.</span>
            </div>
            <div className='oldPlantInfo'>
              {this.props.store.editPlant.map((item) => (
                <img className='editPlantImage' width='200px' src={item.img}></img>
              ))}
            </div>
            <div className='tooltip'>
              <input
                type='url'
                placeholder='Updated Plant Image'
                onChange={(event) => this.handleChangeFor('plant_img', event)}
              />
              <span className='tooltiptext'>Edit the image url.</span>
            </div>
            <div className='oldPlantInfo'>
              {this.props.store.editPlant.map((item) => (
                <p>Last Watered on {`${item.last_watered}`.slice(0, 10)}</p>
              ))}
            </div>
            <div className='tooltip'>
              <input
                type='date'
                placeholder='Updated Last Watered Date'
                onChange={(event) =>
                  this.handleChangeFor('last_watered', event)
                }
              />
              <span className='tooltiptext'>
                Edit when you last watered the plant.
              </span>
            </div>
            <button className='updatePlantBtn' type='submit'>Update Plant</button>
          </form>
          <Link to='/rooms'>
          <button className='cancelBtn'>Cancel</button>
        </Link>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(EditPlantPage);
