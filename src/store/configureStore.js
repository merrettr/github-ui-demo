import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducer, { sagas } from '../modules';

export default initialState => {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
    sagaMiddleware,
  ];

  if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
  }

  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
  );

  sagaMiddleware.run(sagas);

  return store;
}