import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchPlants(action) {
  // console.log("in fetchMovieSaga");

  let response = yield axios({
    method: 'GET',
    url: `/api/plant/${action.payload}`,
  });
  console.log('response', response.data);
  yield put({
    type: 'SET_PLANTS',
    payload: response.data,
  });
}

function* addPlant(action) {
  console.log('payload in add plant', action.payload);
  let response = yield axios({
    method: 'POST',
    url: `/api/plant`,
    data: action.payload
  });
  console.log('response', response.data);
}

function* deletePlant(action) {
  console.log('payload in delete plant', action.payload);
  let response = yield axios({
    method: 'DELETE',
    url:`/api/plant/${action.payload}`,
    payload: action.payload
  })
  console.log('response in delete', response.data);
}

// function* editPlant(action) {
//   console.log('payload in edit plant', action.payload);
//   let response = yield axios({
//     method: 'PUT',
//     url: '/api/plant',
//     data: action.payload
//   })
//   console.log('response in edit', response.data);
// }

function* waterPlant(action) {
  console.log('payload in waterPlant', action.payload);
  let response = yield axios({
    method: 'PUT',
    url: `/api/plant/${action.payload}`,
    data: action.payload
  })
  console.log('response in waterplant', response.data);
}

function* plantSaga() {
  yield takeLatest('FETCH_PLANTS', fetchPlants);
  yield takeLatest('ADD_PLANT', addPlant);
  yield takeLatest('DELETE_PLANT', deletePlant);
  yield takeLatest('WATER_PLANT', waterPlant);
  // yield takeLatest('EDIT_PLANT', editPlant);
}

export default plantSaga;
