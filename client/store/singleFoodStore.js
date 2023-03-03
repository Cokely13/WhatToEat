import axios from "axios";

// Action Types
const SET_SINGLE_FOOD = "SET_SINGLE_FOOD";
const UPDATE_SINGLE_FOOD = "UPDATE_SINGLE_FOOD";
const TOKEN = "token";

// Action creators
export const _setSingleFood= (fooddata) => {
  return {
    type: SET_SINGLE_FOOD,
    fooddata,
  };
};

const _updateSingleFood = (fooddata) => {
  return {
    type: UPDATE_SINGLE_FOOD,
    fooddata,
  };
};

//Thunks
export const fetchFood = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/foods/${id}`);
    dispatch(_setSingleFood(data));
  };
};

export const updateSingleFood = (food, history) => {
  return async (dispatch) => {
    try {
        await axios.put(`/api/foods/${food.id}`, food);
        const { data: foodData } = await axios.get(`/api/foods/${food.id}`);
        dispatch(_updateSingleFood(foodData));
        history.push(`/foods/${food.id}`)
      }
     catch (error) {
      console.log("FOOD", food)
    }
  };
};

// reducer
const initialState = [];
const singleFoodReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_FOOD:
      return action.fooddata;
    case UPDATE_SINGLE_FOOD:
      return action.fooddata;
    default:
      return state;
  }
};

export default singleFoodReducer;
