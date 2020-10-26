import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class NewPlantPage extends Component {
  state = {
    heading: 'New Plant',
    NewPlant: {
      roomId: '',
      name: '',
      image: '',
    },
  };

  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_ROOMS',
    });
  };

  onChange = (propertyName, event) => {
    this.setState({
      NewPlant: {
        ...this.state.NewPlant,
        [propertyName]: event.target.value,
      },
    });
    console.log('room is now', this.state.NewPlant);
  };

  handleSubmit = () => {
    console.log('tried to make a new plant', this.state.NewPlant);
    this.props.dispatch({ type: 'ADD_PLANT', payload: this.state.NewPlant });
    this.props.dispatch({ type: 'FETCH_PLANTS', payload: this.props.store.user.id});
  this.props.history.push('/plants');
  };

  render() {
    return (
      <div>
        
        <h2>{this.state.heading}</h2>
        <div className="newPlantContainer">
        <form onSubmit={this.handleSubmit}>
        <div className='roomSelect'>
          {this.props.store.room === undefined ? (
            <div>you didn't see anything</div>
          ) : (
            <select
              className='roomSelectInput'
              onChange={(event) => this.onChange('roomId', event)}
            >
              {this.props.store.room.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.room}
                </option>
              ))}
            </select>
          )}
        </div>
          <input
            type='text'
            placeholder='Plant Name'
            onChange={(event) => this.onChange('name', event)}
          ></input>
          <input
            type='url'
            placeholder='Image Url'
            onChange={(event) => this.onChange('image', event)}
          ></input>
          <button type='submit'>Add this plant!</button>
        </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NewPlantPage);
