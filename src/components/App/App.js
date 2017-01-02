import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeaderContainer from '../../containers/TodoHeaderContainer';
import TodoListContainer from '../../containers/TodoListContainer';

const App = (props) => (
    <div>
        <h1>Test</h1>
        <TodoHeaderContainer/>
        <TodoListContainer/>
    </div>
);

export default App;