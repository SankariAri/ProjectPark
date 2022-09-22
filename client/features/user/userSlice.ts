import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';


// ---------------- initial state ---------------------------------------
interface UserState {
    userProfile: {
      id: number | null;
    }, 
    registration: {
      status: 'loaded' | 'loading' | 'failed'
    }
  } 

  const initialState : UserState = {
    userProfile: {
      id: null,
    }, 
    registration: {
      status: 'loading'
    }
  };

// -------------------- slice/reducers ----------------------------
export const userSlice = createSlice({
    name: 'user',
    initialState,
      reducers: {
        setUserId: (state, action: PayloadAction<number>) => { state.userProfile.id = action.payload }
      },
    extraReducers: (builder) => {
      builder.addCase(registerUser.fulfilled, (state) => { state.registration.status = 'loaded' }),
      builder.addCase(registerUser.rejected, (state) => { state.registration.status = 'failed' }),
      builder.addCase(registerUser.pending, (state) => { state.registration.status = 'loading' })
    }
})

// ----------------------- thunk ----------------------------------
export const registerUser = createAsyncThunk(
  '/user/registerUser',
  async (form: {username: string, password: string }, thunkApi) => {

    try {
      console.log('entered fetch req')
      const response = await fetch('/api/auth/signup', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userInfo: {
            username: form.username,
            password: form.password
          }
        })
      });
      console.log(response)
      if (response.status === 200) return 200; 
      else return 400;
    } catch (e) {
      console.log(e.response.data)
      return thunkApi.rejectWithValue(e.response.data);
      
    };
  }
);
    
export default userSlice.reducer; 
export const {setUserId} = userSlice.actions;

// const response = await fetch('/api/auth/signup', {
//   method: 'POST', 
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     userInfo: {
//       username: form.username,
//       password: form.password
//     }
//   }),