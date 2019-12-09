import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div className= {this.props.item.done ? 'cross' : 'normal'}>
                <input type="checkbox" onChange={this.props.done}  checked={this.props.item.done} />

                {/* {
                    this.props.item.done ? <input type="checkbox" onClick = {this.props.done} checked/> : <input type="checkbox" onClick = {this.props.done} />
                } */}
                {this.props.item.title}
                {/* <button onClick={this.props.done}> {this.props.item.done ? 'undone' : 'Done'}</button> */}
                <button onClick={this.props.delete}> delete </button>
            </div>
        )
    }
}
