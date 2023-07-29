import { createReducer } from "@reduxjs/toolkit";


export const blogReducer = createReducer({blog:[]},{
    blogRequest : (state)=>{
        loading=true
    },
    blogSuccess : (state,action)=>{
        loading=false;
        state.blog= action.payload ;
    },
    blogFail : (state,action)=>{
        loading=false;
        state.error = action.payload;
        state.blog = null;

    },
    clearErrors : (state)=>{
        state.error = null;
    }
    
})