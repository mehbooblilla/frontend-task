import { createSlice } from "@reduxjs/toolkit";

interface User {
  name: string;
  level: number;
  xp: number;
  avatarUrl?: string;
}

interface UserState {
  profile: User | null;
}

const initialState: UserState = {
  profile: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
