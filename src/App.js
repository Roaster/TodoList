import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import Todos from './components/Todos'
import Header from './components/Header'
import AddTodo from './components/AddTodo'

class App extends Component{

  removeTodo = (todo) => {
    if(this.state.todos[todo]){
      let myTodos = this.state.todos
      myTodos.splice(todo, 1);
      this.setState({todos: myTodos})
    }
  }

  addTodo = (todo) =>{
    if(todo === ""){
      return
    }
    let myTodos = this.state.todos
    let newTodo = {
      id: this.state.todos.length,
      todo: todo,
      completed: false
    }
    myTodos.push(newTodo)
    this.setState({todos: myTodos})
  }

  clearTodo = () => {
    this.setState(
      {
        todos: []
      }
    )
  }

  changeCompletion = (todo) => {
    let myTodos = this.state.todos
    myTodos[todo].completed = !myTodos[todo].completed
    this.setState({todos: myTodos})
  }
  state = {
    todos: [
   ]
  }

  render(){
    return (
      <div>
      <div style ={{display: "flex", flexDirection: "column", width: "100%", alignItems:"center", justifyItems:"center"}}>
      <Header/>
      <AddTodo addTodo={this.addTodo} clearTodo={this.clearTodo} />
      </div>
      <Todos todos={this.state.todos} removeTodo={this.removeTodo} changeCompletion={this.changeCompletion} />
      </div>
    );
  }
}

export default App;
