import React, { useEffect, useState } from 'react'
import AllTask from './AllTask'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Createtask = () => {
  const [title, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [userData,setuserData] = useContext(AuthContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTask={title, taskDate, category, description,active:false,newTask:true,completed:false,failed:false}

    const data=userData

    data.forEach(element => {
      if(element.name == assignTo){
        console.log(element);
        
        element.tasks.push(newTask)
        element.taskCount.newTask+=1
      }
    });
    setuserData(data)
    console.log(userData)

    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setDescription("");
    

    };

    
  return (
    <div className='flex gap-10 flex-col'>
      <form onSubmit={(e)=>{
        handleSubmit(e)
      }} action="" className="mx-10 p-10 gap-10 flex items-start justify-between bg-neutral-800 font-medium">
        <div className="w-1/2 flex flex-col justify-between items-start gap-3 "> 
        <div  className="w-3/4 flex flex-col gap-2">
          <h3 className="text-lg" onChange={(e)=>{setTaskTitle(e.target.value)}}>Task Title</h3>
          <input type="text" className="w-full h-10 rounded-lg outline-none bg-transparent border-2 px-3 py-5 " name="" id="" placeholder="Make a UI design" value={title} onChange={(e)=>{setTaskTitle(e.target.value)}}  />
        </div>

        <div className="w-3/4 flex flex-col gap-2">
          <h3 className="text-lg" onChange={(e)=>{setTaskDate(e.target.value)}}>Date</h3>
          <input className="w-full h-10 rounded-lg outline-none bg-transparent border-2 px-3 py-5 " type="date" name="" id="" value={taskDate} onChange={(e)=>{setTaskDate(e.target.value)}}  />
        </div>
        <div className="w-3/4 flex flex-col gap-2">
          <h3 className="text-lg" onChange={(e)=>{setAssignTo(e.target.value)}}>Assign to</h3>
          <input className="w-full h-10 rounded-lg outline-none bg-transparent border-2 px-3 py-5 " type="text" name="" id="" placeholder="Employee Name" value={assignTo} onChange={(e)=>{setAssignTo(e.target.value)}}  />
        </div>
        <div className="w-3/4 flex flex-col gap-2">
          <h3 className="text-lg" onChange={(e)=>{setCategory(e.target.value)}}>Category</h3>
          <input className="w-full h-10 rounded-lg outline-none bg-transparent border-2 px-3 py-5 " type="text" name="" id="" placeholder="Design,Dev etc." value={category} onChange={(e)=>{setCategory(e.target.value)}}  />
        </div>
        </div>
        <div className="w-1/2 flex flex-col justify-between items-start gap-3 ">
          <div className="w-full flex flex-col gap-2">
            <h3 className="text-lg" value={description} onChange={(e)=>{setDescription(e.target.value)}}>Description</h3>
            <textarea name="" id=""  rows="10" className="rounded-lg bg-transparent border-2 px-3 py-2 resize-none w-full" value={description} onChange={(e)=>{setDescription(e.target.value)}} ></textarea>
          </div>
          <button className="w-full h-11 bg-emerald-600 rounded-lg" type="submit">Create Task</button>
        </div>
      </form>
      <AllTask/>
    </div>
  )
}

export default Createtask
