import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const add_user = createAsyncThunk(
  "user/adduser",
  async({name,email,password},{rejectWithValue})=>{

    try {

      const result = await axios.post(
        "/api/users/register",
        {
          name,
          email,
          password
        }
      );

      return result.data;

    } catch(error){

      return rejectWithValue(
        error.response.data
      );

    }

  }
);


const userslice = createSlice({

name:"users",

initialState:{
 users:[],
 loading:false,
 error:null
},


reducers:{},


extraReducers:(builder)=>{

builder

.addCase(add_user.pending,(state)=>{
 state.loading=true;
})


.addCase(add_user.fulfilled,(state,action)=>{

state.loading=false;
state.users.push(action.payload);

})


.addCase(add_user.rejected,(state,action)=>{

state.loading=false;
state.error=action.payload;

})

}

});

export default userslice.reducer