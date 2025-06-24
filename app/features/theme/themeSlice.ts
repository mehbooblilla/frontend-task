import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  isDark: boolean;
  loading: boolean;
}

// ✅ Load from localStorage (safe on client-side only)
const getInitialTheme = (): boolean => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  }
  return false;
};

const initialState: ThemeState = {
  isDark: getInitialTheme(),
  loading: true,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
      localStorage.setItem('theme', state.isDark ? 'dark' : 'light'); // persist
    },
    setTheme: (state, action) => {
      state.isDark = action.payload;
      localStorage.setItem('theme', action.payload ? 'dark' : 'light'); // persist
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { toggleTheme, setTheme, setLoading } = themeSlice.actions;
export default themeSlice.reducer;
