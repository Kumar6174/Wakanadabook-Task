import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_PRODUCTS_REQUEST,
  fetchProductsSuccess,
  fetchProductsFailure,
} from '../actions/productsActions';

// Worker Saga: Perform the API call
function* fetchProductsSaga() {
  try {
    const response = yield call(() =>
      axios.get('https://fakestoreapi.com/products')
    );
    yield put(fetchProductsSuccess(response.data)); // Dispatch success action
  } catch (error: any) {
    yield put(fetchProductsFailure(error.message)); // Dispatch failure action
  }
}

// Watcher Saga: Watch for FETCH_PRODUCTS_REQUEST
export function* watchProductsSaga() {
  yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
}
