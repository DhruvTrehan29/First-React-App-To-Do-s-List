import React from 'react'
import {ToDoItem} from "../MyComponents/ToDoItem";
export const ToDos = (props) => {
  let colorOfToDosHeading={
     color:'green'
  }
  return (
    <div className='container'>
         <h3 className='text-center my-3' style={colorOfToDosHeading}>ToDos List</h3>
        {props.todos.length===0?"Congratulations No Work left to display !!!!":
        props.todos.map((todo)=> {
           return <ToDoItem todo={todo} onDelete={props.onDelete} onKeep={props.onKeep}/>
           })
              }
       
    </div>
  )
}

export default ToDos
