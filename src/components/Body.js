import React from 'react'
import CreateTask from './CreateTask'
import TaskContainer from './TaskContainer'

const Body = () => {
  return (
    <div className='w-1/2 bg-slate-100 h-[700px] m-auto flex flex-col gap-10 justify-center text-center items-center '>
      <CreateTask/>
      <TaskContainer/>
    </div>
  )
}

export default Body
