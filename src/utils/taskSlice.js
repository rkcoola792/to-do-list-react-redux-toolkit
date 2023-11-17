const { createSlice } = require("@reduxjs/toolkit");

const taskSlice=createSlice({
    name:"task",
    initialState:{
        taskList:[],
        taskLeft:0,
        editItem:false,
        editID:null
    },
    reducers:{
        addItem:(state,action)=>{
            state.taskList.push(action.payload)
            state.taskLeft = state.taskLeft + 1;
        },
        deleteItem:(state,action)=>{
            state.taskList.splice(action.payload,1)
            state.taskLeft = state.taskLeft - 1;
        },
        updateItem:(state,action)=>{
           state.taskList[state.editID]=action.payload
        },
        editItemReducer:(state,action)=>{
            state.editItem=!state.editItem;
            state.editID=action.payload
        },
        clearItems:(state,action)=>{
            state.taskList=[];
            state.taskLeft=0;
        },
       
        decreaseItem:(state,action)=>{
            state.taskLeft = state.taskLeft - 1;
        },
        increaseItem:(state,action)=>{
            state.taskLeft = state.taskLeft + 1;
        },
    }
})

export default taskSlice.reducer

export const{addItem,deleteItem,editItemReducer,updateItem,clearItems,decreaseItem,increaseItem}=taskSlice.actions