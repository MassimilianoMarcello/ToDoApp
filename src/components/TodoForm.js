import React,{useState} from 'react'

function Todo() {
    const[input,setInput]=useState("")
  return (
    <form action="" className="todo-form">
        <input type="text" placeholder='Add a New Activity' value={input} name='text' className='todo-input' />
    <button className='todo-button'>Add Task</button>
    </form>
  )
}

export default Todo