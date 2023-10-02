import { createSlice } from "@reduxjs/toolkit";

const documentSlice = createSlice({
  name: "document",
  initialState: {
    focusParagraph: null,
  },
  reducers: {
    setFocusParagraph(state, action) {
      state.focusParagraph = action.payload;
    },
  },
});

export default documentSlice.reducer;
export const { setFocusParagraph } = documentSlice.actions;
