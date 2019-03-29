import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                  text: "Go to UPD",
                  isCompleted: false
                },
                {
                  text: "Teach about React",
                  isCompleted: false
                },
                {
                  text: "Have a group photo",
                  isCompleted: false
                }
            ]
        }
    }

    add = text => {
        const newTodos = [...this.state.todos, { text: text, isCompleted: false }];
        console.log(this.state.todos);
        this.setState({todos: newTodos});


        /* using Object.assign() */
        // const newTodos = Object.assign([], this.state.todos)
        // newTodos.push({ text: text, isCompleted: false })
        // console.log(this.state.todos);
        // this.setState({todos: newTodos});

        /* mutation: no, no, no */
        // let newTodos = this.state.todos;
        // newTodos.push({text: text, isCompleted: false});
        // console.log(this.state.todos);
        // this.setState({todos:newTodos});

        /* mutation? */
        // let newTodos = this.state.todos.concat({text: text, isCompleted: false})
        // console.log(this.state.todos);
        // this.setState({todos:newTodos});
    }

    remove = index => {
        const newTodos = [...this.state.todos];
        newTodos.splice(index, 1);
        this.setState({todos: newTodos});
    }

    done = index => {
        const newTodos = [...this.state.todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted
        this.setState({todos: newTodos});

        /* using Object.assign() for object manipulation */
        // let newTodos = Object.assign({}, this.state)
        // newTodos.todos[index].isCompleted = !newTodos.todos[index].isCompleted
        // this.setState(newTodos);
    }

    render() {
        return (
            <div>
                {this.state.todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    index={index}
                    todo={todo}
                    onDone={this.done}
                    onRemove={this.remove}
                />
                ))}
                <hr />
                <TodoForm handleSubmit={this.add}/>
            </div>
        );
    }
}

export default TodoList;