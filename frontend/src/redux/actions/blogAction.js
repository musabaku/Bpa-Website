import axios from "axios";

export const getBlog = ()=> async (dispatch) => {
  try {
    dispatch({ type: "blogRequest" });
    const { data } = await axios.get("/api/v1/blog");
    console.log(data)
    dispatch({ type: "blogSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "blogFail", payload: error.response.data.message });
  }
};
