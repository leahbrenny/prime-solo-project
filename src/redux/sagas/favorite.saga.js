import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchFavorites(action) {
    console.log('payload', action.payload);
    
  
    let response = yield axios({
      method: "GET",
      url: `/api/favorite/${action.payload}`,
    });
    console.log("response", response.data);
    yield put({
      type: "SET_FAVORITES",
      payload: response.data,
    });
  }

  function* favoriteSaga(){
      yield takeLatest('FETCH_FAVORITES', fetchFavorites);
  }
  
  
  export default favoriteSaga;