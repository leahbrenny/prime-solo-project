import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchPlants(action) {
    // console.log("in fetchMovieSaga");
  
    let response = yield axios({
      method: "GET",
      url: `/api/plant/${action.payload}`,
    });
    console.log("response", response.data);
    yield put({
      type: "SET_PLANTS",
      payload: response.data,
    });
  }

  function* plantSaga(){
      yield takeLatest('FETCH_PLANTS', fetchPlants);
  }
  
  
  export default plantSaga;