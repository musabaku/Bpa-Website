import { createReducer } from "@reduxjs/toolkit";


export const blogReducer = createReducer({blogs:[]},{
    blogRequest : (state)=>{
        state.loading=true
    },
    blogSuccess : (state,action)=>{
        state.loading=false;
        state.blogs= action.payload.blogs ;
    },
    blogFail : (state,action)=>{
        state.loading=false;
        state.error = action.payload;
        state.blogs = null;

    },
    clearErrors : (state)=>{
        state.error = null;
    }
    
})