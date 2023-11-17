import { createSlice } from "@reduxjs/toolkit";
import { setAuthToken } from "../../libs/Api";
import { IAuth } from "../../interfaces/authInterface";

const initialAuthState: IAuth = {
  id: 0,
  email: "",
  first_name: "",
  last_name: "",
  username: "",
};

export const authSliceRedux = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    AUTH_LOGIN: (state, action) => {
      const { id, email, first_name, last_name, username } =
        action.payload.user;

      const { token } = action.payload;

      setAuthToken(token);
      localStorage.setItem("token", token);

      state.id = id;
      state.username = username;
      state.first_name = first_name;
      state.email = email;
      state.last_name = last_name;
    },
    AUTH_CHECK: (state, action) => {
      const { id, email, first_name, username, last_name } =
        action.payload.user;
      state.id = id;
      state.email = email;
      state.first_name = first_name;
      state.username = username;
      state.last_name = last_name;
    },
    AUTH_ERROR: () => {
      localStorage.removeItem("token");
    },
    AUTH_LOGOUT: () => {
      localStorage.removeItem("token");

      return initialAuthState;
    },
  },
});
