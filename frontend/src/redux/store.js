// store.js
import { configureStore } from '@reduxjs/toolkit';
import {propertyReducer,propertyDetailsReducer} from './reducers/propertyReducer';
import {blogReducer} from './reducers/blogReducer';
import thunk from 'redux-thunk'
const store = configureStore({
  reducer: {
    properties: propertyReducer, 
    blogs: blogReducer, 
    propertyDetails: propertyDetailsReducer, 

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),  
});
export default store;
