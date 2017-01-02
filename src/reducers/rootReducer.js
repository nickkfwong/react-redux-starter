import { combineReducers } from 'redux-immutable';
import todoReducer from './data/todoReducer';

const rootReducer = combineReducers({
  'todo': todoReducer
});

export default rootReducer;