import React, { Component } from 'react'
import './TodoItem.css'

export class TodoItem extends Component {
    render() {
        if(this.props.data.completed !== true){
        return (
            
            <div>
                <h1>{this.props.data.todo}</h1>
            </div>
        )
        } else {
            return (
            
                <div>
                    <h1 className="finished">{this.props.data.todo}</h1>                
                </div>
            )
        }
    }
}

export default TodoItem
