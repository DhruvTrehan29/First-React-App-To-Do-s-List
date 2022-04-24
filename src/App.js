import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {ToDos} from './MyComponents/ToDos';
import {Footer} from './MyComponents/Footer';
import {AddToDo} from './MyComponents/AddToDo';
import React, { useState } from 'react';

function App() {

  const onDelete = (todo)=>{
console.log("Hey I am onDelete Function",todo);
setTodos(todos.filter((e)=>{
  return e!==todo;
}))
  }
  const onKeep=(todo)=>{
    console.log("Hey I am onkeep Function",todo);
  }
const addTODO=(title,desc)=>{
  console.log("This is the addTodo function",title,desc);
}
  const [todos, setTodos] = useState([

    {sno : 1,
    title : "Go to the market",
    desc : "You have to go to the market",
    return_time:"4pm"
    },
    {sno : 2,
      title : "Go to the gym",
      desc : "You have to go to the gym",
      return_time:"5pm"
      },
      {sno : 1,
        title : "Go to the park",
        desc : "You have to go to the park",
        return_time:"6pm"
        }
  ]);
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
