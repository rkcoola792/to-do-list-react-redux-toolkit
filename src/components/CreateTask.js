import React, { useState ,useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/taskSlice";

const CreateTask = () => {
  
  const dispatch=useDispatch();
  const [showInputTask,setShowInputTask]=useState("");
  const taskList = useSelector((store) => store.tasks.taskList);
  const taskRef=useRef();
  

  const handleAdd=()=>{
  console.log("curre", taskRef?.current?.value);
  dispatch(addItem(taskRef?.current?.value));
  setShowInputTask("")
  }


  
  
  
  return (
    <div className="to-do-list-container">
      <div>
        <h1 className="font-bold text-4xl mb-6">TO-DO-LIST</h1>
      </div>

      <input
        ref={taskRef}
        value={showInputTask}
        type="text"
        placeholder="Add Task"
        className="m-4 p-4 w-[300px] rounded-lg"
        onChange={(e)=>setShowInputTask(e.target.value)}
      ></input>
      <button className="bg-green-400 p-4 rounded-lg
       hover:shadow-lg hover:bg-green-300"
       onClick={handleAdd}
       >
        Add
      </button>

      <div className="task-details">
        <h4>Total Tasks : {taskList.length}</h4>
        <h4>Remaining Tasks : </h4>
      </div>
    </div>
  );
};

export default CreateTask;
