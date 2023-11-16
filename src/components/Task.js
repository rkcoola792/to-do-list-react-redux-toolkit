import React from 'react'
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const Task = () => {
  return (
    <div className="task-container h-[60px] w-[600px] bg-white shadow-lg m-2 flex justify-between ">
      <div className="task-name m-4">task name</div>
      <div className="icons m-4 flex gap-2 ">
        <EditIcon className="cursor-pointer hover:scale-125 hover:text-blue-500"></EditIcon>
        <DeleteIcon className=" hover:text-red-500 cursor-pointer hover:scale-125"></DeleteIcon>
        <CheckCircleOutlineIcon className="hover:text-green-600 cursor-pointer hover:scale-125"></CheckCircleOutlineIcon>
      </div>
    </div>
  );
}

export default Task
