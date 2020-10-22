import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchSearch(action) {
  let response = yield axios({
    method: 'GET',
    url: `/api/search/${action.payload}`,
  });
  console.log('response', response.data);
  yield put({
    type: 'SET_SEARCH',
    payload: response.data,
  });
}

function* searchSaga() {
  yield takeLatest('FETCH_SEARCH', fetchSearch);
}

export default searchSaga;
