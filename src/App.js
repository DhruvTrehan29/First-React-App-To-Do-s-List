import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {ToDos} from './MyComponents/ToDos';
import {Footer} from './MyComponents/Footer';
import {AddToDo} from './MyComponents/AddToDo';
import React, { useState,useEffect, useLayoutEffect} from 'react';

function App() {
let initToDo;
if(localStorage.getItem("todos")===null){
  initToDo=[];
}
else{
  initToDo=JSON.parse(localStorage.getItem("todos"));
}
  const onDelete = (todo)=>{
console.log("Hey I am onDelete Function",todo);
setTodos(todos.filter((e)=>{
  return e!==todo;
}))
localStorage.setItem("todos",JSON.stringify(todos));
  }
  const onKeep=(todo)=>{
    console.log("Hey I am onkeep Function",todo);
  }
const addTODO=(title,desc)=>{
  console.log("This is the addTodo function",title,desc);
  let sno;
  if(todos.length==0){
    sno=0;
  }
  else{
     sno=todos[todos.length-1].sno+1;
  }
  const MyToDo={
    sno:sno,
    title:title,
    desc:desc
  }
  setTodos([...todos,MyToDo]);
  console.log(MyToDo);
  localStorage.setItem("todos",JSON.stringify(todos));
}
  const [todos, setTodos] = useState(initToDo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));  
  },[todos])
  return (
    <>
 <Header title="ToDos List" searchBar={true}/>
 <AddToDo addTODO={addTODO}/>
 <ToDos todos={todos} onDelete={onDelete} onKeep={onKeep}/>
 <Footer/>
    </>
  );
}

export default App;
