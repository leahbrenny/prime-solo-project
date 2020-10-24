import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
function* fetchNewPlant(action) {
    let response = yield axios({
        method: 'GET',
        url: `/api/newplant/${action.payload}`,
    });
    console.log('response in fetch newplant', response.data);
  yield put({
    type: 'SET_NEW_PLANT',
    payload: response.data,
  });
}


function* newplantSaga() {
    yield takeLatest('FETCH_NEW_PLANT', fetchNewPlant);
}

export default newplantSaga;