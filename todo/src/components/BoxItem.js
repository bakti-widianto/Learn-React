import React, { Component } from 'react';
import FormItem from './FormItem'
import ListItem from './ListItem'


export default class BoxItem extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: ["masak", "belajar"] }

        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(todo) {
        this.setState((state, props) => ({
            todos: [...state.todos, todo]
        }));
    }


    render() {

        return (
            <div>
                <FormItem tambah={this.addTodo} />
                <ListItem todos={this.state.todos} />
            </div>
        )
    }
}