import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import Immutable from 'immutable';
import rootReducer from '../reducers';

const initialState = {};

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(createLogger())
)