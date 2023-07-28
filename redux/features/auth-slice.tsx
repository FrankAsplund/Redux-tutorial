import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: AuthState;
};

type AuthState = {
  isAuth: boolean;
  username: string;
  password: string;
  uid: string;
  isModerator: boolean;
};

const initialState = {
  value: {
    isAuth: false,
    username: "",
    password: "",
    uid: "",
    isModerator: false,
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },

    logIn: (
      state,
      action: PayloadAction<{ username: string; password: string }>
    ) => {
      return {
        value: {
          isAuth: true,
          username: action.payload.username,
          password: action.payload.password,
          uid: "123",
          isModerator: false,
        },
      };
    },

    signUp: (
      state,
      action: PayloadAction<{ username: string; password: string }>
    ) => {
      // Here, you can add logic to save the user profile to a backend or a database
      // For this example, we'll simply update the state with the provided username and password
      state.value.username = action.payload.username;
      state.value.password = action.payload.password;
    },
  },
});

export const { logIn, logOut, signUp } = auth.actions;
export default auth.reducer;
