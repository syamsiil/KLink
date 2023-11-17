import { createSlice } from "@reduxjs/toolkit";
import { IAuth } from "../../interfaces/authInterface";

const initialDataSlice: { userData: IAuth[] } = { userData: [] };

export const userDataSlice = createSlice({
  name: "users",
  initialState: initialDataSlice,
  reducers: {
    GET_USER_DATAS: (state, action) => {
      state.userData = action.payload;
    },
  },
});
