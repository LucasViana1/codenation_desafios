import AuthConstants from "../constants/auth";

export const authError = (errorMsg) => ({
  type: AuthConstants.AUTH_CALLBACK_ERROR,
  payload: errorMsg,
});

export const authSucess = (credentials) => ({
  type: AuthConstants.AUTH_CALLBACK_SUCCESS,
  payload: { ...credentials },
});
