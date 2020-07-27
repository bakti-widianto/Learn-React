import React, { Component } from 'react';
import Item from './Item'

function ListItem(props) {

    const listTodo = props.todos.map((todo, index) => <Item key={index} no={index + 1} task={todo} />)
    return (
        <ul>{listTodo}</ul>
    )
}

export default ListItem;