import React, { useState } from 'react'
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../utils/taskSlice';
const Task = ({name,id}) => {
    const [lineThrough,setLineThrough]=useState(false)
    const taskList=useSelector(store=>store.tasks.taskList)
    const dispatch=useDispatch()
    // console.log(taskList)
    const handleDelete=()=>{
        dispatch(deleteItem(id))
        console.log("id",id)
    }
    const handleEdit=()=>{
        
    }
    const handleCheck=()=>{
     setLineThrough(!lineThrough);
    }
  return (
    <div className="task-container h-[60px] w-[600px] bg-white shadow-lg m-2 flex justify-between ">
      <div className={lineThrough ? "task-name m-4 line-through" : "task-name m-4"}>
        {name}
      </div>
      <div className="icons m-4 flex gap-2 ">
        <EditIcon
          onClick={handleEdit}
          className="cursor-pointer hover:scale-125 hover:text-blue-500"
        ></EditIcon>
        <DeleteIcon
          onClick={handleDelete}
          className=" hover:text-red-500 cursor-pointer hover:scale-125"
        ></DeleteIcon>
        <CheckCircleOutlineIcon
          onClick={handleCheck}
          className="hover:text-green-600 cursor-pointer hover:scale-125"
        ></CheckCircleOutlineIcon>
      </div>
    </div>
  );
}

export default Task
