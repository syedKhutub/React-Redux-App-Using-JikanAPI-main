import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_ERROR,
    INCREMENT_COUNT,
    SHOW_MORE
  } from "./actionType";

  export const fetchDataRequest = () => {
    return {
      type: FETCH_DATA_REQUEST
    };
  }
  
  export const fetchDataSuccess = (item) => {
      debugger;
    return {
      type: FETCH_DATA_SUCCESS,
      item
    };
  }
  
  export const fetchDataError = (error) => {
    return {
      type: FETCH_DATA_ERROR,
      payload: { error }
    };
  }

  export const incrementCount = () => {
      return{
          type: INCREMENT_COUNT,
      }
  }

  export const showMore = () => {
      debugger;
      return {
          type: SHOW_MORE
      }
  }