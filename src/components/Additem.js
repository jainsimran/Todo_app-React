import React, { Component } from 'react'

export default class Additem extends Component {
    state = {
        title: '',
        done: false
    }

    changeName = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    submit = (item) => {
        let todoItem = {
            title: this.state.title,
            done: this.state.done
        }
        this.props.additemFn(todoItem);
        this.setState({
            title: '',
            done: false
        })
    }



    render() {
        return (
            <div>
                <input type="text" onChange={this.changeName} value={this.state.title} ></input>
                <button onClick={this.submit}> Submit </button>
            </div>
        )
    }
}
