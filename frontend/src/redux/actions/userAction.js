import axios from "axios";

export const login = (loginEmail, loginPassword) => async (dispatch) => {
  try {
    dispatch({ type: "userRequest" });
    const config = { headers: { "Content-type": "application/json" } };

    const { data } = await axios.post("/api/v1/login", {
      email: loginEmail,
      password: loginPassword,
    },config);

    dispatch({ type: "userSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "userFail", payload: error.response.data.message });
  }
};
