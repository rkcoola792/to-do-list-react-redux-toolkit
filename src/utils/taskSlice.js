const { createSlice } = require("@reduxjs/toolkit");

const taskSlice=createSlice({
    name:"task",
    initialState:{
        taskList:[],
        taskLeft:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.taskList.push(action.payload)
        },
        deleteItem:(state,action)=>{
            state.taskList.splice(action.payload,1)
        },
        editItem:(state,action)=>{
            // state.taskList
        },
        clearItems:(state,action)=>{
            state.taskList=[];
        },

    }
})

export default taskSlice.reducer

export const{addItem,deleteItem,editItem,clearItems}=taskSlice.actions