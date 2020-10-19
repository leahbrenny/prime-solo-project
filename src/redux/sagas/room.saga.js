import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchRooms(action) {
  console.log('payload', action.payload);

  let response = yield axios({
    method: 'GET',
    url: `/api/room/${action.payload}`,
  });
  console.log('response', response.data);
  yield put({
    type: 'SET_ROOMS',
    payload: response.data,
  });
}

function* addRoom(action){
  console.log('payload', action.payload);
  let response = yield axios({
    method: 'POST',
    url: `/api/room/${action.payload}`,
    data: action.payload
  });
  console.log('response', response.data);
}

function* roomSaga() {
  yield takeLatest('FETCH_ROOMS', fetchRooms);
  yield takeLatest('ADD_ROOM', addRoom);
}

export default roomSaga;
