import React from 'react'
const Todo=({id, name, children})=>
      <li id={id}  ><span className="name">{name}</span>  <span> {children} 
             </span></li>
    

Todo.displayName = 'Todo'
export default Todo