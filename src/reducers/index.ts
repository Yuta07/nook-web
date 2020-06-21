import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { authReducer } from './authReducer';
import rootSaga from '../sagas/index';
import { AuthState } from '../types/auth';

export interface ApplicationState {
  auth: AuthState;
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));

export type RootState = ReturnType<typeof rootReducer>;

sagaMiddleware.run(rootSaga);

export default store;
