import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class UserPage extends Component {
  // state ={
  //   randomPlant: {},
  // };
  // componentDidMount = () => {
  //   this.setState({randomPlant: this.props.store.plant[Math.floor(Math.random() * this.props.store.plant.length)]})
  // }
  render() {
    console.log('trying to find plant', this.props);
    const randomPlant = this.props.store.plant[Math.floor(Math.random() * this.props.store.plant.length)]
    return (
      <div>
        <h1 id="welcome">Welcome {this.props.store.user.username}, to your Planter!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
        <h3>Your Plants</h3>
        {/* <p><img width="200px" src={this.state.randomPlant.image} /> Plant {this.state.randomPlant.plant}</p> */}
        {this.props.store.plant.map( item =>
            <p key={item.id}> <img width="200px" src={item.image}></img> Plant {item.plant}</p>)}
        {/* <p>{this.props.store.plant.id[1]}</p> */}
        {/* <p>{this.props.store.plant[Math.floor((Math.random()* (this.props.store.plant.length -1)) + 0)]}</p> */}
        {/* <ul>
          {this.props.store.plant.map( item =>
            <li key={item.id}> <img width="200px" src={item.image}></img> Plant {item.plant}</li>)}
        </ul> */}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
