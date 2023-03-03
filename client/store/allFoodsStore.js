import Axios from "axios";

const SET_FOODS ="SET_FOODS"
const CREATE_FOOD = "CREATE_FOOD"
const DELETE_FOOD = "DELETE_FOOD"


export const setFoods = (foods) =>{
  return{
    type: SET_FOODS,
    foods
  }
};

const _createFood = (food) => {
  return {
    type: CREATE_FOOD,
    food,
  };
};

const _deleteFood = (food) => {
  return {
    type: DELETE_FOOD,
    food
  };
};

export const fetchFoods = () => {
  return async (dispatch) => {
        const {data}= await Axios.get("/api/foods");
        dispatch(setFoods(data));
  };
};

export const createFood = (food, history) => {
  return async (dispatch) => {
    const { data: created } = await Axios.post("/api/foods", food);
    dispatch(_createFood(created));
    history.push("/foods");
  };
};

export const deleteFood = (id, history) => {
  return async (dispatch) => {
    const { data: food } = await Axios.delete(`/api/foods/${id}`);
    dispatch(_deleteFood(food));
    history.push("/foods");
  };
};


const initialState = [];
export default function foodsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FOODS:
      return action.foods;
      case CREATE_FOOD:
        return [...state, action.food];
        case DELETE_FOOD:
      return state.filter((food) => food.id !== action.food.id)
      ;
      default:
        return state;
    }
  }
