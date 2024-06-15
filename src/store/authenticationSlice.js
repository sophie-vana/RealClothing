import { createSlice } from "@reduxjs/toolkit";

// Set initial state
const initialState = {
  user: null,
  isLoggedIn: false,
  error: null,
};

// Create slice for login actions with reducers
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Reducer to handle user login
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.error = null;
    },
    // Reducer to handle user logout
    logoutUser: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    // Reducer to set error message
    setError: (state, action) => {
      state.error = action.payload;
    },
    // Reducer to clear error message
    clearError: (state) => {
      state.error = null;
    },
    // Reducer to set user details
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.error = null;
    },
  },
});

export const { loginUser, logoutUser, setError, clearError, setUser } =
  authSlice.actions;

export default authSlice.reducer;
