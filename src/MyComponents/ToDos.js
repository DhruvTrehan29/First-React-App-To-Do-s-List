import React from 'react'
import {ToDoItem} from "../MyComponents/ToDoItem";
export const ToDos = (props) => {
  let colorOfToDosHeading={
     color:'green'

  }
let myStyle={
  minHeight:"70vh",
  margin:"10px auto"
}
  return (
    <div className='container' style={myStyle}>
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
