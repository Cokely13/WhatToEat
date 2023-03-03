import Axios from "axios";

const SET_ORDERS ="SET_ORDERS"
const CREATE_ORDER = "CREATE_ORDER"
const DELETE_ORDER = "DELETE_ORDER"


export const setOrders = (orders) =>{
  return{
    type: SET_ORDERS,
    orders
  }
};

const _createOrder = (order) => {
  return {
    type: CREATE_ORDER,
    order,
  };
};

const _deleteOrder = (order) => {
  return {
    type: DELETE_ORDER,
    order
  };
};

export const fetchOrders = () => {
  return async (dispatch) => {
        const {data}= await Axios.get("/api/orders");
        dispatch(setOrders(data));
  };
};

export const createOrder = (order, history) => {
  return async (dispatch) => {
    const { data: created } = await Axios.post("/api/orders", order);
    dispatch(_createOrder(created));
    // history.push("/orders");
  };
};

export const deleteOrder = (id, history) => {
  return async (dispatch) => {
    const { data: order } = await Axios.delete(`/api/orders/${id}`);
    dispatch(_deleteOrder(order));
    // history.push("/orders");
  };
};


const initialState = [];
export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORDERS:
      return action.orders;
      case CREATE_ORDER:
        return [...state, action.order];
        case DELETE_ORDER:
      return state.filter((order) => order.id !== action.order.id)
      ;
      default:
        return state;
    }
  }
