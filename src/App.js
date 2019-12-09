import React, { Component } from 'react';
import './App.css';
import Todolist from './components/Todolist';
import Additem from './components/Additem';

export default class App extends Component {
  state = {
    todo: [
      {
        title: "call mom",
        done: false
      },
      {
        title: "do loundry",
        done: false
      },
      {
        title: "clean home",
        done: false
      },
      {
        title: "apply mom us",
        done: false
      }
    ]
  }

  remove = (item) => {
    let tempList = this.state.todo;
    tempList.splice(item,1);
    console.log(tempList);
    this.setState({ todo: tempList })
  }

  done = (item) => {
    let tempList = this.state.todo;
    tempList[item].done = !tempList[item].done;
    
    this.setState({ todo: tempList})
  }

  add = (item) => {
    let tempList = this.state.todo;
    tempList.unshift(item);
    this.setState({ todo: tempList })
  }


  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <Additem additemFn={this.add} />
        <Todolist todoItems= {this.state.todo} delete = {this.remove} done = {this.done} />
      </div>
    )
  }
}
