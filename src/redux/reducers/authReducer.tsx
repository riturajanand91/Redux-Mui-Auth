import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../actions/types";
const INITIAL_STATE = {
  data: [],
  // user: {},
  loading: true,
  loaded: false,
};

const authReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        data: action.payload,
        loading: false,
        loaded: false,
      };
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
        loaded: false,
        isAuthenticated: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
        loaded: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
export default authReducer;
