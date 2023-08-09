import axios from "axios";

export const getBlog = ()=> async (dispatch) => {
  try {
    dispatch({ type: "blogRequest" });
    const { data } = await axios.get("/api/v1/blog");
    // console.log(data)
    dispatch({ type: "blogSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "blogFail", payload: error.response.data.message });
  }
};
export const getAdminBlog = () => async (dispatch) => {
  try {
    dispatch({ type: "AdminBlogRequest" });
    const { data } = await axios.get("/api/v1/admin/blog");
    dispatch({ type: "AdminBlogSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "AdminBlogFail",
      payload: error.response.data.message,
    });
  }
};
export const createBlog = (BlogData) => async (dispatch) => {
  try {
    dispatch({ type: "createBlogRequest" });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/admin/blog/new`,
      BlogData,
      config
    );

    dispatch({
      type: "createBlogSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "createBlogFail",
      payload: error.response.data.message,
    });
  }
};
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: "clearErrors"
  });
};
export const updateBlog = (id, BlogData) => async (dispatch) => {
  try {
    dispatch({ type: "updateBlogRequest" });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/admin/blog/${id}`,
      BlogData,
      config
    );

    dispatch({
      type: "updateBlogSuccess",
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: "updateBlogFail",
      payload: error.response.data.message,
    });
  }
};

// Delete Blog
export const deleteBlog = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteBlogRequest" });

    const { data } = await axios.delete(`/api/v1/admin/blog/${id}`);

    dispatch({
      type: "deleteBlogSuccess",
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: "deleteBlogFail",
      payload: error.response.data.message,
    });
  }
};

export const getBlogDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "blogDetailsRequest" });
    const { data } = await axios.get(`/api/v1/blog/${id}`);
    // console.log(data);
    dispatch({ type: "blogDetailsSuccess", payload: data.blog });
  } catch (error) {
    dispatch({
      type: "blogDetailsFail",
      payload: error.response.data.message,
    });
  }
};