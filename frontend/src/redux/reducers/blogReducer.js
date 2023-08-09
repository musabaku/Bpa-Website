import { createReducer } from "@reduxjs/toolkit";

export const blogReducer = createReducer(
  { blogs: [] },
  {
    blogRequest: (state) => {
      state.loading = true;
    },
    blogSuccess: (state, action) => {
      state.loading = false;
      state.blogs = action.payload.blogs;
    },
    blogFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.blogs = null;
    },
    AdminBlogRequest: (state) => {
      state.loading = true;
    },
    AdminBlogSuccess: (state, action) => {
      state.loading = false;
      state.blogs = action.payload.blogs;
      state.BlogCount = action.payload.BlogCount;
    },
    AdminBlogFail: (state, action) => {
      state.loading = false;
      state.blogs = null;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  }
);

export const createBlogReducer = createReducer(
  { blogs: [] },
  {
    createBlogRequest: (state) => {
      state.loading = true;
    },
    createBlogSuccess: (state, action) => {
      state.loading = false;
      state.success = action.payload.success;

      state.blogs = action.payload.Blog;
    },
    createBlogFail: (state, action) => {
      state.loading = false;

      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  }
);
export const updateBlogReducer = createReducer(
  { blogs: [] },
  {
    updateBlogRequest: (state) => {
      state.loading = true;
    },
    updateBlogSuccess: (state, action) => {
      state.loading = false;
    },
    updateBlogFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  }
);
export const deleteBlogReducer = createReducer(
  { blogs: [] },
  {
    deleteBlogRequest: (state) => {
      state.loading = true;
    },
    deleteBlogSuccess: (state, action) => {
      state.loading = false;
    },
    deleteBlogFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  }
);

export const blogDetailsReducer = createReducer(
  { blogDetails: {}, loading: true },
  {
    blogDetailsRequest: (state) => {
      state.loading = true;
    },
    blogDetailsSuccess: (state, action) => {
      state.loading = false;
      state.blogDetails = action.payload;
    },
    blogDetailsFail: (state, action) => {
      state.loading = false;
      state.blogDetails = null;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  }
);
