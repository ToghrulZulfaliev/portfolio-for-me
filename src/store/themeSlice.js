import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;

  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  return prefersDark ? "dark" : "light";
};

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: getInitialTheme(),
    introDone: false, // ✅ MUTLƏQ OLMALIDIR
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
      localStorage.setItem("theme", state.mode);
    },
    setIntroDone: (state, action) => {
      state.introDone = action.payload;
    },
  },
});

// ✅ BURDA export ETMƏLİSƏN
export const { toggleTheme, setIntroDone } = themeSlice.actions;

export default themeSlice.reducer;
