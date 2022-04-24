import React, { useState } from 'react';




export const AddToDo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit=(e)=>{
        e.preventDefault()
       if(!title||!desc){
           alert("Either the title or description is blank!!!!")
       }
       props.addTODO(title,desc);
    }
    let AddtoDoItemStyle={
        color:'green',
    }
  return (
    <div className='container my-4'>
     <h3  className='text-center' style={AddtoDoItemStyle}>Add a Todo</h3>
      <form onSubmit={(submit)}>
  <div className="mb-3">
    <label for="title" className="form-label">To Do Title</label>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="desc" className="form-label">ToDo Description</label>
    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
  </div>
 
  <button type="submit" className="btn btn-sm btn-success">Add ToDo</button>
</form>
    </div>
  )
}


