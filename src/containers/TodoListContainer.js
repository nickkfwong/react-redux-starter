import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

import {
  deleteTodo,
} from '../actions';

// 'todo' is the reducer index
// 'todos' is the name on the model 
const mapStateToProps = (state) => ({
  todos: state.getIn(['todo', 'todos'])
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteTodo: (index) => () => (
    dispatch(deleteTodo({ index }))
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);