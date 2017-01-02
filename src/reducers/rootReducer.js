import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form';
import todoReducer from './data/todoReducer';
import simpleFormReducer from './form/simpleFormReducer';

const reducers = {
  todo : todoReducer,
  form : formReducer.plugin({
    simpleForm: simpleFormReducer 
  })
}

const rootReducer = combineReducers(reducers);

export default rootReducer;