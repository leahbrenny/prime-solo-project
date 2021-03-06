import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import plant from './plant.reducer';
import room from './room.reducer';
import favorite from './favorite.reducer';
import roomplant from './roomplant.reducer';
import editRoom from './editRoom.reducer';
import search from './search.reducer';
import newplant from './newplant.reducer';
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  plant, //contains user plants
  room, //contains user rooms
  favorite, //contains user favorites
  roomplant, //contains plants in selected room
  editRoom,
  search,
  newplant,
});

export default rootReducer;
