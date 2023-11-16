import React, { useState } from "react";


const CreateTask = () => {
  const [taskInput, setTaskInput] = useState("");
  const [showTaskInput, setShowTaskInput] = useState("");
 
  let taskArray=[]

  const handleAdd=()=>{
   setTaskInput(showTaskInput);
   taskArray.push(taskInput);
   setShowTaskInput("")
  }

  
  
  return (
    <div className="to-do-list-container">
      <div>
        <h1 className="font-bold text-4xl mb-6">TO-DO-LIST</h1>
      </div>

      <input
        type="text"
        value={showTaskInput}
        placeholder="Add Task"
        className="m-4 p-4 w-[300px] rounded-lg"
        onChange={(e) => {
          setShowTaskInput(e.target.value);
          
        }}
      ></input>
      <button className="bg-green-400 p-4 rounded-lg
       hover:shadow-lg hover:bg-green-300"
       onClick={handleAdd}
       >
        Add
      </button>

      <div className="task-details">
        <h4>Total Tasks :</h4>
        <h4>Remaining Tasks : </h4>
      </div>
    </div>
  );
};

export default CreateTask;
