import React, { Component } from 'react';

export default class TodoForm extends Component{
   constructor(){
      super();
      this.state = {
         todoText: '',
      };
   }

   handleChange = (evt) => {
      const { name, value } = evt.target;
      this.setState({
         [name]: value,
      })
   }

   handleSubmit = (evt) => {
      evt.preventDefault()
      this.props.addItem(this.state.todoText);
      this.setState({
         todoText: '',
      })
   }

   render(){
      return(
         <form onSubmit={this.handleSubmit}>
            <label htmlFor='todo-input' > Add something ToDo: </label>
            <input 
               id='todo-input' 
               name='todoText'
               value={this.state.todoText}
               onChange={this.handleChange} />
            <button > Add Todo </button>
         </form>
      )
   }
}