import React from 'react';
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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoitems,
    }

  //   handleClick = (evt) =>{
  //     console.log(evt.target.todo)
  //   }
  }

  render() {
    return (
      <div>
        <h2> Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm />
        {/* <button onClick= {this.handleClick}> click this </button> */}
      </div>
    );
  }
}

export default App;
