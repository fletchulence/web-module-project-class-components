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

   render(){
      return(
         <form>
            <label htmlFor='todo-input' > Add something ToDo: </label>
            <input 
               id='todo-input' 
               name='todoText'
               value={this.state.todoText}
               onChange={this.handleChange} />
         </form>
      )
   }
}