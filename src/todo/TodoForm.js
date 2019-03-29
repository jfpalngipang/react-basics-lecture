import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.input = React.createRef();
    }

    onValueChange = value => {
        this.setState({value: value});
    }

    onSubmit = e => {
        e.preventDefault();
        // console.log('A todo was submitted: ' + this.input.current.value);
        // const { handleSubmit } = this.props;
        // handleSubmit(this.input.current.value);


        const { handleSubmit } = this.props;
        handleSubmit(this.state.value);
        this.setState({value: ''});
    }

    render() {
        return (
            // <div className="form-container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-container">
                    <input
                        type="text"
                        className="input"
                        placeholder="New To-Do"
                        ref={this.input}
                        value={this.state.value}
                        onChange={e => this.onValueChange(e.target.value)}
                    />
                    <Button
                        className="add-button"
                        variant="outline-success"
                        size="sm"
                        type="submit"
                    >
                        Add
                    </Button>
                    </div>
                </form>
            // </div>
        );
    }
}

export default TodoForm;
