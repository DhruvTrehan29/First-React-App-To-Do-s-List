import React from 'react'

export  const ToDoItem = ({todo,onDelete,onKeep}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <p>{todo.return_time}</p>    
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>&nbsp;&nbsp;&nbsp;
      <button className="btn btn-sm btn-success" onClick={()=>{onKeep(todo)}}>Keep it</button>
      </div>
  )
}


