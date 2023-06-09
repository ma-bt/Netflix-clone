import { createSlice } from '@reduxjs/toolkit'


export interface CounterState {
  value: number
}




export const userSlice = createSlice({
  name: 'user',
  initialState:{

    user: null,
  },
  reducers: {
    login: (state ,action) => {
      state.user = action.payload;
    },
    logout:(state) => {
      state.user = null;
    }

  },
})

// Action creators are generated for each case reducer function
export const { login,logout  } = userSlice.actions;

export const selectUser = (state : any) => state.user.user;
export default userSlice.reducer
