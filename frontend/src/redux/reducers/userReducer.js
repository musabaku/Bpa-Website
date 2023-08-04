import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
  { user: [], loading: false, isAuthenticated: false, errors: null },
  {
    userRequest: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    userSuccess: (state, action) => {
      state.isAuthenticated = true;

      state.loading = false;
      state.user = action.payload;
    },
    userFail: (state, action) => {
      state.isAuthenticated = false;

      state.loading = false;
      state.user = null;
      state.errors = action.payload;
    },
    clearErrors: (state) => {
      
      state.error = null;
    },
  }
);
