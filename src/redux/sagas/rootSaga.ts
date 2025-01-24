import { all } from 'redux-saga/effects';
import { watchProductsSaga } from './productsSaga';

export default function* rootSaga() {
  yield all([watchProductsSaga()]); // Combine all sagas
}

