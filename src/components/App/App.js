import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeaderContainer from '../../containers/TodoHeaderContainer';
import TodoListContainer from '../../containers/TodoListContainer';
import SimpleForm from '../../containers/Form/SimpleFormContainer';

const App = (props) => (
    <div>
        <h1>Test</h1>
        <TodoHeaderContainer/>
        <TodoListContainer/>
        <p/>
        <SimpleForm/>
    </div>
);

export default App;