import React, { Component } from 'react'

export class AddTodo extends Component {
    render() {
        return (
            <div style={{width: "50%"}}>
            <form onSubmit={(e) => {
                    e.preventDefault()
                    this.props.addTodo(e.target[0].value)
                    document.getElementById("addTodo").value=""
                    }}>
                <input id="addTodo" style={{width: "95%", margin: "auto"}}  type="text" placeholder="Enter a todo..." name="addTodo">
                </input>
                <div style={{display: "flex", justifyContent: "space-between", width: "95%"}}>
                    <input type="submit" value="Add" />
                    <button onClick={() => {
                    this.props.clearTodo()
                    }}>Clear</button>
                </div>
            </form>
            
            </div>
        )
    }
}

export default AddTodo
