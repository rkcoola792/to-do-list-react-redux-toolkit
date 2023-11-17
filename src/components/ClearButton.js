import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearItems } from '../utils/taskSlice';

const ClearButton = () => {
    const dispatch=useDispatch();
    const taskList=useSelector(store=>store.tasks.taskList)

    const handleClear=()=>{
        dispatch(clearItems())
    }
  return (
    <div className="w-[200px] clear-button bg-red-500 hover:bg-red-400 m-4 mb-8 p-4 sm:w-[250px] md:w-[300px] lg:w-[400px] rounded-lg hover:shadow-lg cursor-pointer">
      <button className="text-2xl " onClick={handleClear}>
        {" "}
        Clear List
      </button>
    </div>
  );
}

export default ClearButton
