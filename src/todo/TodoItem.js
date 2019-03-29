import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class TodoItem extends Component {
    componentWillMount() {
        console.log('will mount');
    }

    componentDidMount() {
        console.log('did mount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('will receive props: ', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { todo } = this.props
        return !(nextProps.isCompleted === todo.isCompleted
                && nextState.text === todo.text);
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('will update');
    }

    componentDidUpdate(nextProps, nextState) {
        console.log('did update');
    }

    componentWillUnmount() {
        console.log('Sayonara!');
      }

    render() {
        console.log('render');
        const { todo, index, onRemove, onDone } = this.props
        return (
            <div
              className="todo"
              style={{ opacity: todo.isCompleted ? 0.9 : 1 }}
            >
                <div
                    className="text-container"
                    style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
                >
                    {todo.text}
                </div>
        
                <div className="buttons-container">
                    <Button
                        variant="outline-warning"
                        size="sm"
                        onClick={() => onDone(index)}
                    >
                        { todo.isCompleted ? 'Undo' : 'Done' }
                    </Button>
                    <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => onRemove(index)}
                    >
                        Delete
                    </Button>
                </div>
            </div>
          );
    }
}

export default TodoItem;