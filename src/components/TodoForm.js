import React, { Component } from 'react';

export default class TodoForm extends Component{
   constructor(){
      super();
      this.state = {
         todoText: ''
      }
   }
   render(){
      return(
         <form>
            <label htmlFor='todo-input' > Add something ToDo: </label>
            <input id='todo-input' />
         </form>
      )
   }
}