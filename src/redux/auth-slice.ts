import { createSlice } from "@reduxjs/toolkit";
import { getTokenFromLocalStorage } from "../utils";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: getTokenFromLocalStorage(),
    user: null,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    removeUser(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export default authSlice.reducer;
export const { setToken, setUser, removeUser } = authSlice.actions;
