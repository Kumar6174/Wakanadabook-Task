import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { productsReducer } from './reducers/productsReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  products: productsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run the root saga
sagaMiddleware.run(rootSaga);
