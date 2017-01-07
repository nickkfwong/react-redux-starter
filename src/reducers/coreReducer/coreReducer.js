import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import myTableReducer from '../myTableReducer';
import loadTableDataFormReducer from '../loadTableDataFormReducer';

const reducers = {
    myTable: myTableReducer,
    form : formReducer.plugin({
        loadTableDataForm: loadTableDataFormReducer//
    })
}

const coreReducer = combineReducers(reducers);

export default coreReducer;