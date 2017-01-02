import { handleActions } from 'redux-actions';
import { TodoInitialState } from '../../constants/stateModel/stateModel';
import { CREATE_TODO, DELETE_TODO, CHANGE_TEXT } from '../../constants/actionTypes';
import { fromJS } from 'immutable';

// Determine what to do on the model, ie. change, add, remove from the model
const todoReducer = (state = TodoInitialState, action) =>
{
    switch(action.type)
    {
        // state.set, state.merge, state.setIn will return a new state
        // return this 'new state' is the key.
        case CREATE_TODO:
            console.log('create');
            let todos = state.get('todos').push(state.get('todo'));     
            return state.set('todos', todos);
        case DELETE_TODO:
            console.log('delete');
            return state.set('todos', state.get('todos').splice(action.payload.index, 1));;
        case CHANGE_TEXT:
            console.log('changeText');
            return state.setIn(['todo','text'], action.payload.text);
        default:
            console.log('default')
            return state;
    }
}

export default todoReducer;