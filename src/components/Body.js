import React from 'react'
import CreateTask from './CreateTask'
import TaskContainer from './TaskContainer'
import ClearButton from './ClearButton'

const Body = () => {
  return (
    <div className='w-1/2 bg-slate-100 h-auto m-auto flex flex-col gap-10 justify-center text-center items-center pt-16 mt-8 '>
      <CreateTask/>
      <TaskContainer/>
      <ClearButton/>
    </div>
  )
}

export default Body
