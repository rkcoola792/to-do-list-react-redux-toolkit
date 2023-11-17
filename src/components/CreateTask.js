import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, editItemReducer, updateItem } from "../utils/taskSlice";

const CreateTask = () => {
  const dispatch = useDispatch();
  const [showInputTask, setShowInputTask] = useState("");
  const [updateInputTask, setUpdateInputTask] = useState("");
  const taskList = useSelector((store) => store.tasks.taskList);
  const taskLeft = useSelector((store) => store.tasks.taskLeft);
  const editTask = useSelector((store) => store.tasks.editItem);
  const editID = useSelector((store) => store.tasks.editID);

  const taskRef = useRef();
  const updateRef = useRef();

  const handleAdd = () => {
    dispatch(addItem(taskRef?.current?.value));
    setShowInputTask("");
  };
  const handleUpdate = () => {
    dispatch(updateItem(updateRef?.current?.value));
    dispatch(editItemReducer());
    setShowInputTask("");
  };

  const handleBack = () => {
    dispatch(editItemReducer());
  };

  return (
    <div className="to-do-list-container">
      <div>
        <h1 className="font-bold text-4xl mb-6">TO-DO-LIST</h1>
      </div>
      <div>
        {editTask ? (
          <>
            <input
              ref={taskRef}
              value={showInputTask}
              type="text"
              placeholder="Add Task"
              className="m-4  p-4 w-[200px] md:w-[300px]  rounded-lg"
              onChange={(e) => setShowInputTask(e.target.value)}
            ></input>
            <button
              className="bg-green-400 p-4  rounded-lg
       hover:shadow-lg hover:bg-green-300"
              onClick={handleAdd}
            >
              Add
            </button>
          </>
        ) : (
          <>
            <input
              ref={updateRef}
              value={showInputTask}
              type="text"
              placeholder="Update Task"
              className="m-4  p-4 w-[300px] rounded-lg "
              onChange={(e) => setShowInputTask(e.target.value)}
            ></input>
            <button
              className="bg-green-400 p-4 rounded-lg
       hover:shadow-lg hover:bg-green-300"
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              className="bg-slate-400 p-4 ml-4 rounded-lg
       hover:shadow-lg hover:bg-slate-300"
              onClick={handleBack}
            >
              Back
            </button>
          </>
        )}
      </div>

      <div className="task-details my-4">
        <h4>Total Tasks : {taskList.length}</h4>
        <h4 >Remaining Tasks : {taskLeft} </h4>
      </div>
    </div>
  );
};

export default CreateTask;
