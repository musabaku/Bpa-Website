// const server = "http://localhost:4000/api/v1"

import axios from "axios";
export const getProperty =
  (keyword = "", location, price = [0, 900000]) =>
  async (dispatch) => {
    try {
      dispatch({ type: "propertyRequest" });
      // const { data } = await axios.get("/property");
      let link = `/api/v1/property?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}`;
      if (location) {
        link = `/api/v1/property?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&location=${location}`;
      }
      const { data } = await axios.get(link);

      dispatch({ type: "propertySuccess", payload: data });
    } catch (error) {
      dispatch({ type: "propertyFail", payload: error.response.data.message });
    }
  };

export const getAdminProperty = (id) => async (dispatch) => {
  try {
    dispatch({ type: "AdminPropertyRequest" });
    const { data } = await axios.get("/api/v1/admin/property");
    dispatch({ type: "AdminPropertySuccess", payload: data.property });
  } catch (error) {
    dispatch({
      type: "AdminPropertyFail",
      payload: error.response.data.message,
    });
  }
};
export const getPropertyDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "propertyDetailsRequest" });
    const { data } = await axios.get(`/api/v1/property/${id}`);
    console.log(data);
    dispatch({ type: "propertyDetailsSuccess", payload: data.property });
  } catch (error) {
    dispatch({
      type: "propertyDetailsFail",
      payload: error.response.data.message,
    });
  }
};

export const updatePropertyDescription =
  (id, description) => async (dispatch) => {
    try {
      dispatch({ type: "updatePropertyDescriptionRequest" });
      const { data } = await axios.put(`/api/v1/property/${id}`, {
        description,
      });
      dispatch({
        type: "updatePropertyDescriptionRequestSuccess",
        payload: data.property,
      });
    } catch (error) {
      dispatch({
        type: "updatePropertyDescriptionRequestFail",
        payload: error.response.data.message,
      });
    }
  };

export const createProperty = (propertyData) => async (dispatch) => {
  try {
    dispatch({ type: "createPropertyRequest" });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/admin/property/new`,
      propertyData,
      config
    );

    dispatch({
      type: "createPropertySuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "createPropertyFail",
      payload: error.response.data.message,
    });
  }
};

export const updateProperty = (id, propertyData) => async (dispatch) => {
  try {
    dispatch({ type: "updatePropertyRequest" });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/admin/property/${id}`,
      propertyData,
      config
    );

    dispatch({
      type: "updatePropertySuccess",
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: "updatePropertyFail",
      payload: error.response.data.message,
    });
  }
};

// Delete property
export const deleteProperty = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deletePropertyRequest" });

    const { data } = await axios.delete(`/api/v1/admin/property/${id}`);

    dispatch({
      type: "deletePropertySuccess",
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: "deletePropertyFail",
      payload: error.response.data.message,
    });
  }
};

