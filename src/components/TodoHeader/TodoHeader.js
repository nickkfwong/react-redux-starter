import React from 'react';
import ReactDOM from 'react-dom';

// 開始建設 Component 並使用 connect 進來的 props 並綁定事件（onChange、onClick）。注意我們的 state 因為是使用 `ImmutableJS` 所以要用 `get()` 取值

class TodoHeader extends React.Component{
    constructor(props){
        super(props);
        console.log('constructor');
        console.log(props);
    }

    render() {
        return (
            <div>
                <h1>TodoHeader</h1>
                <input type="text" value={this.props.todo.get('text')} onChange={this.props.onChangeText} />
                <button onClick={this.props.onCreateTodo}>送出</button>
            </div>
        )
    }
}

export default TodoHeader;