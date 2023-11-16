import React from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'

const TaskContainer = () => {
    const taskList=useSelector(store=>store.tasks.taskList)
    console.log(taskList)
  return (
    <div className='tasks-list-container'>
     {taskList.map((item,index)=>
        <Task key={index} name={item} id={index}></Task>
     )}
    </div>
  )
}

export default TaskContainer
