import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../services/auth.services";

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (data, thunkAPI) => {
    try {
        const response = await AuthService.signUp(data)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)

    }
  }
);

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(signUp.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

const {reducer} = authSlice

export default reducer
