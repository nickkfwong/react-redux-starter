import Immutable from 'immutable';

export const TodoInitialState = Immutable.fromJS({
  todos: [],
  todo: {
    text: ''
  }
});

export const SimpleFormInitialState = {
    firstName: 'Test',
    lastName: 'Test2'
}