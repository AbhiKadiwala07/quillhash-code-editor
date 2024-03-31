"use client";
import { defaultFolders, defaultIssues } from "@/utils/constant";
import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  activeFile: "",
  fileCode: "",
  listOfOpenFiles: [],
  folders: defaultFolders,
  issues: defaultIssues,
  selectedIssue: null,
  isLeftSidebarOpen: true,
  isRightSidebarOpen: true,
  fileName: "editor.js",
};

const editorSlice = createSlice({
  name: "editor",
  initialState: defaultState,
  reducers: {
    saveValue: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    toggleSidebarCollapse: (state, action) => {
      const { key } = action.payload;
      state[key] = !state[key];
    },
  },
});

export const { saveValue, toggleSidebarCollapse } = editorSlice.actions;

export default editorSlice.reducer;
