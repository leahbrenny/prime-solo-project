import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchRoomPlant(action) {
  console.log('payload', action.payload);

  let response = yield axios({
    method: 'GET',
    url: `/api/roomplant/${action.payload}`,
  });
  console.log('response', response.data);
  yield put({
    type: 'SET_ROOMPLANTS',
    payload: response.data,
  });
}

function* roomPlantSaga() {
  yield takeLatest('FETCH_ROOMPLANTS', fetchRoomPlant);
}

export default roomPlantSaga;