import React from "react";

function Todo (props){
   return(
      <div>
         {/* this is what we want to populate in our form */}
         <p onClick={() => props.toggleCompleted(props.todo.id)}>  
            {props.todo.task}
         </p>
      </div>
   )
}

export default Todo;