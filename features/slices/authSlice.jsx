import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
    msg: "",
    user: false,
    token: "",
    loading: false,
    error: ""
}

export const signupUser = createAsyncThunk('signupuser', async ()=> {
  const res = await fetch("https://tokendor.p.rapidapi.com/create", {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '2fe5a320f0mshb4fc21341296e93p143768jsn9979f5afd723',
      'X-RapidAPI-Host': 'tokendor.p.rapidapi.com'
    },
    body: JSON.stringify(body)
  })
  return await res.json()
})

export const signinUser = createAsyncThunk('signinuser', async ()=> {
  const res = await fetch("http://104.215.249.5:5000/api/login", {
    method: "post",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(body)
  })
  return await res.json()
})

const authSlice = createSlice({
    name: "userTwo",
    initialState,
    reducers:{},
    extraReducers:{
      [signupUser.pending]: (state,action) => {
        state.loading = true
      },
      [signupUser.fulfilled]: (state,{payload:{error, msg}}) => {
        state.loading = false
        if(error) {
          state.error = error
        } else {
          state.msg = msg
        }
      },
      [signupUser.rejected]: (state, action) => {
        state.loading = true
      }
    }
})

export default authSlice.reducer;