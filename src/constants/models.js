import Immutable from 'immutable';

export const TodoInitialState = Immutable.fromJS({
  todos: [],
  todo: {
    text: ''
  }
});