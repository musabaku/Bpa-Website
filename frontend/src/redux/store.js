// store.js
import { configureStore } from '@reduxjs/toolkit';
import {propertyReducer,propertyDetailsReducer,updatePropertyDescriptionReducer} from './reducers/propertyReducer';
import {blogReducer} from './reducers/blogReducer';
import {userReducer} from './reducers/userReducer';
import thunk from 'redux-thunk'
const store = configureStore({
  reducer: {
    properties: propertyReducer, 
    blogs: blogReducer, 
    user: userReducer, 
    propertyDetails: propertyDetailsReducer, 
    propertyDescription: updatePropertyDescriptionReducer, 

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),  
});
export default store;


