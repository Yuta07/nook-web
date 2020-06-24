import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { authReducer } from './authReducer';
import rootSaga from '../sagas/index';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const rootReducer = (history: any) =>
  combineReducers({
    auth: authReducer,
    router: connectRouter(history),
  });

const store = createStore(rootReducer(history), compose(applyMiddleware(routerMiddleware(history), sagaMiddleware)));

export type State = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);

export default store;
