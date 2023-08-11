// import axios from "axios";
import axiosInstance from "../axios";

export const login = (loginEmail, loginPassword) => async (dispatch) => {
  try {
    dispatch({ type: "userRequest" });
    const config = { headers: { "Content-type": "application/json" } };

    const { data } = await axiosInstance.post("/login", {
      email: loginEmail,
      password: loginPassword,
    },config);

    dispatch({ type: "userSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "userFail", payload: error.response.data.message });
  }
};
export const logout = () => async (dispatch) => {
  try {

     await axiosInstance.get("/logout");

    dispatch({ type: "logoutSuccess" });
  } catch (error) {
    dispatch({ type: "logoutFail", payload: error.response.data.message });
  }
};
