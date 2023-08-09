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
      state.PropertyCount=action.payload.PropertyCount;
      state.resultPerPage=action.payload.resultPerPage;
      state.filteredPropertyCount=action.payload.filteredPropertyCount;
    },
    propertyFail: (state, action) => {
      state.loading = false;
      state.properties = null;
      state.error = action.payload;
    },
    AdminPropertyRequest: (state) => {
      state.loading = true;
    },
    AdminPropertySuccess: (state, action) => {
      state.loading = false;
      state.properties = action.payload.property;
      state.PropertyCount=action.payload.PropertyCount;
    },
    AdminPropertyFail: (state, action) => {
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

export const createPropertyReducer = createReducer(
  {properties:[]},
  {
    createPropertyRequest: (state) => {
      state.loading = true;
    },
    createPropertySuccess: (state, action) => {
      state.loading = false;
      state.properties = action.payload.property;
    },
    createPropertyFail: (state, action) => {
      state.loading = false;
      
      state.error = action.payload;
    },
    // createPropertyReset: (state, action) => {
    //   state.isCreated = false;
    // },
    clearErrors: (state) => {
      state.error = null; 
    },
  }
);
export const updatePropertyReducer = createReducer(
  {properties:[]},
  {
    updatePropertyRequest: (state) => {
      state.loading = true;
    },
    updatePropertySuccess: (state, action) => {
      state.loading = false;
    },
    updatePropertyFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // updatePropertyReset: (state, action) => {
    //   state.isUpdated = false;
    // },
    clearErrors: (state) => {
      state.error = null; 
    },
  }
);
export const deletePropertyReducer = createReducer(
  {properties:[]},
  {
    deletePropertyRequest: (state) => {
      state.loading = true;
    },
    deletePropertySuccess: (state, action) => {
      state.loading = false;
    },
    deletePropertyFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // deletePropertyReset: (state, action) => {
    //   state.isDeleted = false;
    // },
    clearErrors: (state) => {
      state.error = null; 
    },
  }
);