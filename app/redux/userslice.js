import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const add_user = createAsyncThunk("/user/adduser",async({name,email,password})=>{
    const result = await axios.post("http://localhost:3001/Users",{name,email,password});
    return result.data
})


const userslice = createSlice({
    name:"users",
    initialState:{users:[]},
    reducers:{},
    extraReducers:builder=>
    {
        builder.addCase(add_user.fulfilled,(state,action)=>
        {
            state.users.push(action.payload)
        })
    }
})

export default userslice.reducer