import { createReducer } from "@reduxjs/toolkit";

export const propertyReducer = createReducer(
  {properties:[]},
  {
    propertyRequest: (state) => {
      state.loading = true;
    },
    propertySuccess: (state, action) => {
      state.loading = false;
      state.properties = action.payload.property;
    },
    propertyFail: (state, action) => {
      state.loading = false;
      state.properties = null;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null; 
    },
  }
);

export const propertyDetailsReducer = createReducer(
  {propertyDetails:{},loading:true},
  {
    propertyDetailsRequest: (state) => {
      state.loading = true;
    },
    propertyDetailsSuccess: (state, action) => {
      state.loading = false;
      state.propertyDetails = action.payload;
    },
    propertyDetailsFail: (state, action) => {
      state.loading = false;
      state.propertyDetails = null;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null; 
    },
  }
);

export const updatePropertyDescriptionReducer = createReducer({property:{}},{
  updatePropertyDescriptionRequest: (state) => {
    state.loading = true;
  },
  updatePropertyDescriptionSuccess: (state, action) => {
    state.loading = false;
    state.property = action.payload;
  },
  updatePropertyDescriptionFail: (state, action) => {
    state.loading = false;
    state.property = null;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null; 
  },
})


