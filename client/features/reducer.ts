import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// INITIAL STATE 

const initialState = {
  username: null,
  currentPark: null, 
  parks: [],
  hikes: [],   
}