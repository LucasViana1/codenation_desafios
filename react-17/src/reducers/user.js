import UserConstants from "../constants/user";

const INITIAL_STATE = {
  name: "",
  email: "",
  thumb: "",
  status: "idle",
  errorMsg: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case UserConstants.GET_USER_REQUEST:
      return {
        ...state,
        status: "running",
      };
    case UserConstants.GET_USER_SUCCESS:
      return {
        ...state,
        ...payload,
        status: "success",
      };
    case UserConstants.GET_USER_FAILED:
      return {
        ...state,
        errorMsg: payload.message,
        status: "error",
      };
    default:
      return state;
  }
};

export default userReducer;
