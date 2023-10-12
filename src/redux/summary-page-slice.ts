import { createSlice } from "@reduxjs/toolkit";

const summaryTableSlice = createSlice({
  name: "summaryTable",
  initialState: {
    focusTagId: null,
    focusDocumentId: null,
  },
  reducers: {
    setFocusDocumentId(state, action) {
      state.focusDocumentId = action.payload;
    },
    setFocusTagId(state, action) {
      state.focusTagId = action.payload;
    },
  },
});

export default summaryTableSlice.reducer;
export const { setFocusDocumentId, setFocusTagId } = summaryTableSlice.actions;
