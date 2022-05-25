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

//class declaration
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoitems,
    }
  }

  //to add the item to the form
  addItem = (taskName) => {
    const newTodo = {
      task: taskName,
      id: new Date(),
      completed: false
    };
    //? what does this do again?
    this.setState({
      todos: [...this.state.todos, newTodo],
    })
  }

  //here is toggling on and off
  toggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id){
          return {
            ...todo, completed: !todo.completed,
          }
        } else {
          return todo;
        }
      })
    })
  }

  //! WE WANT TO HAVE SOMETHING THAT FINDS THE THING WE WANT TO MATCH, AND RETURNS IT BACK,
  //! IN THIS CASE WE ARE LOOKING FOR A TRUE OR FALSE SO FILTER IS PERFECT
  clearCompleted = (evt) =>{
    evt.preventDefault()
    this.setState({
      todos: this.state.todos.filter( todo => !todo.completed)
    })
  }

  render() {
    return (
      <div>
        <h2> Welcome to your Todo App!</h2>
        {/* injecting props called todos */}
        <TodoList 
          todos={this.state.todos} 
          toggleCompleted={this.toggleCompleted} />
        {/* passing in the added item  */}
        <TodoForm addItem={this.addItem} />
        <button onClick={this.clearCompleted}> Clear Completed </button>
      </div>
    );
  }
}

export default App;
