import React from 'react';

function Item(props) {
    return <li>{props.no}. {props.task}</li>;
}

export default Item;