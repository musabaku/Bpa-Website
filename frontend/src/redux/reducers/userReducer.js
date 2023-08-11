import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
  { user: [], loading: false, isAuthenticated: false,  },
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
      state.error = action.payload;
    },
  
    logoutSuccess: (state, action) => {
      state.isAuthenticated = false;

      state.loading = false;
      state.user = null;
    },
    logoutFail: (state, action) => {

      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      
      state.errors = null;
    },
  }
);
