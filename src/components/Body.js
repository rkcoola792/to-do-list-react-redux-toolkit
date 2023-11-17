import React from 'react'
import CreateTask from './CreateTask'
import TaskContainer from './TaskContainer'
import ClearButton from './ClearButton'
import { useSelector } from 'react-redux'

const Body = () => {
     const taskList = useSelector((store) => store.tasks.taskList);
  return (
    <div className=' w-1/2 bg-slate-100 h-auto m-auto flex flex-col gap-10 justify-center text-center items-center pt-16 mt-8 rounded-lg  '>
      <CreateTask/>
      <TaskContainer/>
      {taskList.length ? <ClearButton/>:""}
    </div>
  )
}

export default Body
