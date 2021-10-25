import React from 'react';
import Todo from './Todo';

export default function TodoList (props){
   console.log(props.todos)
   return(
      <div>
         {props.todos.map(todo => {
            return(
               <Todo key={todo.id} todo={todo} />
            )
         })}
      </div>
   )
}  