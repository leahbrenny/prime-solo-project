import { useRadioGroup } from '@material-ui/core';
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchEditPlant(action) {
    let response = yield axios({
        method: 'GET',
        url: `/api/editplant/${action.payload}`,
    });
    console.log('response in fetch edit plant', response.data);
  yield put({
    type: 'SET_EDIT_PLANT',
    payload: response.data,
  });
}

function* updatePlant(action) {
  let response = yield axios({
    method: 'PUT',
    url: `/api/editplant/${action.payload}`,
    data: action.payload
  })
}

function* editPlantSaga() {
    yield takeLatest('FETCH_EDIT_PLANT', fetchEditPlant);
    yield takeLatest('UPDATE_PLANT', updatePlant)
}

export default editPlantSaga;