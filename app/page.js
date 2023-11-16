"use client"
import React, { useState } from 'react'

const page = () => {
  // variable title and desc
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")

  // array to store title and desc
  const [mainTask, setMainTask] = useState([])


  const SubmitHandler=(e)=>{  
    // e.prev will prevent us from submitting form 
    //and thus it will not reload the web page
    
    e.preventDefault()
    
    setMainTask([...mainTask,{title,desc}])

    settitle("");
    setdesc("");
  }

  // delete function
  const deleteHandler=(i)=>{
    let copytask=[...mainTask]
    copytask.splice(i,1);
    setMainTask(copytask)
  }

  let renderTask=<h2>No task available</h2>

  if(mainTask.length>0){
    renderTask=mainTask.map((t,i)=>{
      return (
      <li className='flex items-center justify-between mb-5 '>
        <div className='flex items-center justify-between w-2/3'>
          <h3 className='text-2xl font-semibold'>{t.title}</h3>
          <h5 className='text-xl '>{t.desc}</h5>
      </div>
      <button className='bg-red-400 text-white p-2 rounded font-bold'
          onClick={()=>{
            deleteHandler(i)
            }}
          >Delete</button>
      </li>
      )
    })
  }

  return (
    <>
      <h1 className='p-5 text-center font-bold text-2xl text-white bg-black'>Vijay's Todo List</h1>
      <form onSubmit={SubmitHandler}>
        <input type='text' className='border-2 border-gray-500 text-xl p-2 m-5' 
        placeholder="Enter you task title" 
        value={title}
        onChange={(e)=>{
          settitle(e.target.value);
        }}
        ></input>
        
        <input type='text' className='border-2 border-gray-500 text-xl p-2 m-5' 
        placeholder="Enter description"
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value);
        }}
        ></input>
        <button className='bg-black text-white px-3 py-2  text-2xl m-5 rounded'>Add task</button>
      </form>
      
      <hr />

      <div className='p-5 bg-gray-300'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page