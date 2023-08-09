// store.js
import { configureStore } from "@reduxjs/toolkit";
import {
  propertyReducer,
  propertyDetailsReducer,
  updatePropertyReducer,
  deletePropertyReducer,
  createPropertyReducer,
} from "./reducers/propertyReducer";
import { blogReducer, blogDetailsReducer,updateBlogReducer,deleteBlogReducer, createBlogReducer} from "./reducers/blogReducer";
import { userReducer } from "./reducers/userReducer";
import thunk from "redux-thunk";
const store = configureStore({
  reducer: {
    user: userReducer,
    properties: propertyReducer,
    updateProperty: updatePropertyReducer,
    deleteProperty: deletePropertyReducer,
    propertyDetails: propertyDetailsReducer,
    createProperty: createPropertyReducer,
    blogs: blogReducer,
    blogDetails: blogDetailsReducer,
    updateBlog: updateBlogReducer,
    deleteBlog: deleteBlogReducer,
    createBlog: createBlogReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
export default store;
