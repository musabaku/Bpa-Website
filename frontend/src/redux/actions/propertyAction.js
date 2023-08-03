// const server = "http://localhost:4000/api/v1"


import axios from "axios";
export const getProperty = (keyword="",location,price=[0,900000]) => async (dispatch) => {
  try {
    dispatch({ type: "propertyRequest" });
    // const { data } = await axios.get("/property");
    let link = `/api/v1/property?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}`
    if(location){
      link = `/api/v1/property?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&location=${location}`
    }
    const { data } = await axios.get(link);
  
    dispatch({ type: "propertySuccess", payload: data });
  } catch (error) {
    dispatch({ type: "propertyFail", payload: error.response.data.message });
  }
};

export const getPropertyDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "propertyDetailsRequest" });
    const { data } = await axios.get(`/api/v1/property/${id}`);
  console.log(data)
    dispatch({ type: "propertyDetailsSuccess", payload: data.property });
  } catch (error) {
    dispatch({ type: "propertyDetailsFail", payload: error.response.data.message });
  }
};


export const updatePropertyDescription = (id,description) => async (dispatch) => {
  try {
    dispatch({ type: "updatePropertyDescriptionRequest" });
    const { data } = await axios.put(`/api/v1/property/${id}`, { description });
    dispatch({ type: "updatePropertyDescriptionRequestSuccess", payload: data.property });
  } catch (error) {
    dispatch({ type: "updatePropertyDescriptionRequestFail", payload: error.response.data.message });
  }
};

// import axios from "axios";
// import { propertyRequest, propertySuccess, propertyFail, propertyDetailsRequest, propertyDetailsSuccess, propertyDetailsFail } from "../reducers/propertyReducer";

// export const getProperty = () => async (dispatch) => {
//   try {
//     dispatch(propertyRequest());
//     const { data } = await axios.get("/api/v1/property");
//     dispatch(propertySuccess(data));
//   } catch (error) {
//     dispatch(propertyFail(error.response.data.message));
//   }
// };

// export const getPropertyDetails = (id) => async (dispatch) => {
//   try {
//     dispatch(propertyDetailsRequest());
//     const { data } = await axios.get(`/api/v1/property/${id}`);
//     console.log(data);
//     dispatch(propertyDetailsSuccess(data.property));
//   } catch (error) {
//     dispatch(propertyDetailsFail(error.response.data.message));
//   }
// };

// export const updatePropertyDescription = (id, description) => async (dispatch) => {
//   try {
//     dispatch(propertyDetailsRequest());
//     const { data } = await axios.put(`/api/v1/property/${id}`, { description });
//     dispatch(propertyDetailsSuccess(data.property));
//   } catch (error) {
//     dispatch(propertyDetailsFail(error.response.data.message));
//   }
// };
