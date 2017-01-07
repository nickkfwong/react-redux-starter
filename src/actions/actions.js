import { createAction } from 'redux-actions';
import * as ActionTypes from '../constants/actionTypes';

export const createTodo = createAction(ActionTypes.CREATE_TODO);
export const deleteTodo = createAction(ActionTypes.DELETE_TODO);
export const changeText = createAction(ActionTypes.CHANGE_TEXT);

export const requestData = createAction(ActionTypes.REQUEST_DATA);