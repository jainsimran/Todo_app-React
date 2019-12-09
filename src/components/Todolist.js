import React, { Component } from 'react';
import Todo from './Todo';

export default class Todolist extends Component {
    render() {
        return (
            this.props.todoItems.map((item, index) => 
            <Todo 
             item = {item}
             key = {index}
             delete = {() => this.props.delete(index)}
             done = {() => this.props.done(index)}
            />
            )
        )
    }
}
