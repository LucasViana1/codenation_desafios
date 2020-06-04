import AuthConstants from "../constants/auth";

const INITIAL_STATE = {
  accessToken: "",
  errorMsg: "",
  expirationTime: "",
  expiresIn: "",
  isLogged: false,
  tokenType: "",
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case AuthConstants.AUTH_CALLBACK_ERROR:
      return {
        ...state,
        accessToken: "",
        errorMsg: payload,
        expiresIn: "",
        isLogged: false,
        tokenType: "",
      };
    case AuthConstants.AUTH_CALLBACK_SUCCESS:
      return {
        ...state,
        accessToken: payload.accessToken,
        errorMsg: "",
        expirationTime: new Date().getTime() + parseInt(payload.expiresIn),
        expiresIn: payload.expiresIn,
        isLogged: true,
        tokenType: payload.tokenType,
      };
    default:
      return state;
  }
};

export default authReducer;
