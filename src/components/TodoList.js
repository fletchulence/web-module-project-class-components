import React from 'react';
import Todo from './Todo';

export default function TodoList (props){
   const { todos } = props;
   // mapping through todos to populate todolist 
   return(
      <div>
         {todos.map(todo => {
            return(
               /* the todos are mapped to populate items in list */
               <Todo 
                  key={todo.id} 
                  todo={todo}
                  toggleCompleted={props.toggleCompleted} />
            )
         })}
      </div>
   )
}  