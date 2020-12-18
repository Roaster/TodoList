import React, { Component } from 'react'
import './Todos.css'
import TodoItem from './TodoItem'

export class Todos extends Component {



    render() {
        if(this.props.todos){
            return(
                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    {this.props.todos.map((data,i) => (
                    <div key={i} style={todoStyle}>

                        <input type="checkbox" onChange={(e)  => {
                            this.props.changeCompletion(e.target.title)
                        }} title={i}/>
                        <TodoItem data = {data} />
                        <div style={deleteBtn} title={i} onClick={(e) => {
                            this.props.removeTodo(e.target.title)
                        }}>x</div>
                        
                    </div>
                    )
                    )
                    } 
                    
                </div>
                
            )
            
        } else {
            return (
                <div>
                    <h1>Loading content....</h1>
                </div>
            )
        }
    }
}

const todoStyle = {
    background: "#bbb",
    display:"flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "2px",
    width: "80%",
    padding: "0px 15px",
    borderRadius: "2%"
    
}
const deleteBtn = {
    borderRadius: "500%",
    background: "#F00",
    width: "50px",
    height: "50px",
    textAlign: "center",
    fontSize: "25px",
    margin: "0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}
export default Todos
