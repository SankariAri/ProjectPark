import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';


// ---------------- initial state ---------------------------------------
interface UserState {
    userProfile: {
      id: number | null;
      name: string;
    }, 
    registration: {
      status: 'loaded' | 'loading'
    }
  }

  const initialState : UserState = {
    userProfile: {
      id: null,
      name: ''
    }, 
    registration: {
      status: 'loaded'
    }
  };

// -------------------- slice/reducers ----------------------------
export const userSlice = createSlice({
    name: "user",
    initialState,
      reducers: {
        setUserId: (state, action: PayloadAction<number>) => { state.userProfile.id = action.payload }
      },
      extraReducers: (builder) => {
         // register user cases
    builder.addCase(registerUser.fulfilled, (state, action) => { state.registration.status = 'loaded' }),
    builder.addCase(registerUser.rejected, (state, action) => { state.registration.status = 'loaded' }),
    builder.addCase(registerUser.pending, (state, action) => { state.registration.status = 'loading' })
      },
})

// ----------------------- thunk ----------------------------------
export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (form: { username:string, password:string }, thunkApi) => {
        try {
            const response = await fetch('/auth/signup', {
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  userInfo: {
                    username: form.username,
                    password: form.password
                  }
                })
              });
              if (response.status === 200) return 200; 
              else return 400;
        } catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }

    }
    )
    export const {setUserId} = userSlice.actions;
  
export default userSlice.reducer; 