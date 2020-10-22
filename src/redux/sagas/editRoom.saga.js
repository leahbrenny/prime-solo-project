import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
function* fetchEditRoom(action) {
    let response = yield axios({
        method: 'GET',
        url: `/api/editroom/${action.payload}`,
    });
    console.log('response in fetch edit', response.data);
  yield put({
    type: 'SET_EDIT_ROOM',
    payload: response.data,
  });
}

function* updateRoom(action) {
  let response = yield axios({
    method: 'PUT',
    url: `/api/editroom/${action.payload}`,
    data: action.payload
  })
  yield put({
    type:'FETCH_ROOMS'
  })
}

function* editRoomSaga() {
    yield takeLatest('FETCH_EDIT_ROOM', fetchEditRoom);
    yield takeLatest('UPDATE_ROOM', updateRoom)
}

export default editRoomSaga;