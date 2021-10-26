import React from "react";

function Todo (props){
   const { toggleCompleted, todo } = props;
   return (
      <div>
         {/* this is what we want to populate in our form */}
         <p 
            style= {{ textDecoration: props.todo.completed ? 'line-through': null}} 
            onClick={() => toggleCompleted(todo.id)}>  
               {todo.task}
         </p>
      </div>
   )
}

export default Todo;