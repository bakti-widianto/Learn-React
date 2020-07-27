import React, { Component } from 'react';
import FormItem from './FormItem'
import ListItem from './ListItem'
import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:3001/api/',
    timeout: 1000,
    headers: { 'token': 'adnosnacacd3144342@$' }
});


export default class BoxItem extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] }

        this.addTodo = this.addTodo.bind(this);
    }

    componentDidMount() {
        request.get('/todos')
            .then(function (response) {
                // console.log(response)
                this.setState({ todos: response.data });
            }.bind(this))
            .catch(function (error) {
                alert(error);
            })
    }

    addTodo(todo) {
        this.setState((state, props) => ({
            todos: [...state.todos, todo]
        }));
        request.post('/todos',{
            task: todo
        })
            .then(function (response) {
                // console.log(response)
                this.setState({ todos: response.data });
            }.bind(this))
            .catch(function (error) {
                alert(error);
            })
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