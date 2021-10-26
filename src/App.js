import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todoitems = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

//class declaration
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todoitems,
    }
  }

  //to add the item to the form
  addItem = (taskName) =>{
    const newTodo = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    //? what does this do again?
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div>
        <h2> Welcome to your Todo App!</h2>
        {/* injecting props called todos */}
        <TodoList todos={this.state.todos} />
        
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
