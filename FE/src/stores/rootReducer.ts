import { combineReducers } from "@reduxjs/toolkit";
import { authSliceRedux } from "./slices/authSliceRedux";
import { userDataSlice } from "./slices/userSliceRedux";

export const { AUTH_CHECK, AUTH_LOGIN, AUTH_ERROR, AUTH_LOGOUT } =
  authSliceRedux.actions;
export const { GET_USER_DATAS } = userDataSlice.actions;

export const authReducer = authSliceRedux.reducer;
export const userDataReducer = userDataSlice.reducer;

const rootReducer = combineReducers({
  auth: authReducer,
  user: userDataReducer,
});

export default rootReducer;
