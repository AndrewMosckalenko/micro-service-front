import { createSlice } from "@reduxjs/toolkit";

const documentSlice = createSlice({
  name: "document",
  initialState: {
    focusParagraph: null,
    documentCopied: false,
  },
  reducers: {
    setFocusParagraph(state, action) {
      state.focusParagraph = action.payload;
    },
    setDocumentCopiedStatus(state, action) {
      state.documentCopied = action.payload;
    },
  },
});

export default documentSlice.reducer;
export const { setFocusParagraph, setDocumentCopiedStatus } =
  documentSlice.actions;
