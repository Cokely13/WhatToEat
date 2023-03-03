import axios from "axios";

// Action Types
const SET_SINGLE_ORDER = "SET_SINGLE_ORDER";
const UPDATE_SINGLE_ORDER = "UPDATE_SINGLE_ORDER";
const TOKEN = "token";

// Action creators
export const _setSingleOrder= (orderdata) => {
  return {
    type: SET_SINGLE_ORDER,
    orderdata,
  };
};

const _updateSingleOrder = (orderdata) => {
  return {
    type: UPDATE_SINGLE_ORDER,
    orderdata,
  };
};

//Thunks
export const fetchOrder = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/orders/${id}`);
    dispatch(_setSingleOrder(data));
  };
};

export const updateSingleOrder = (order, history) => {
  return async (dispatch) => {
    try {
        await axios.put(`/api/orders/${order.id}`, order);
        const { data: orderData } = await axios.get(`/api/orders/${order.id}`);
        dispatch(_updateSingleOrder(orderData));
        // history.push(`/orders/${order.id}`)
      }
     catch (error) {
      console.log("ORDER", order)
    }
  };
};

// reducer
const initialState = [];
const singleOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_ORDER:
      return action.orderdata;
    case UPDATE_SINGLE_ORDER:
      return action.orderdata;
    default:
      return state;
  }
};

export default singleOrderReducer;
