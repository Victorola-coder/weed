import { User } from "@/model/user.model";
import axiosInstance from "@/utils/api";
import { SignUpSchema } from "@/utils/common";
import { CustomToaster, getSimplifiedError } from "@/utils/core";
import { _setToken } from "@/utils/storage";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginAsync, signupAsync, verifyOtpAsync } from "@/thunks/authThunks";

export interface AuthState {
  user: null | User;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error?: boolean;
  success?: boolean;
  isVerified?: boolean;
  isWeedProfileOneCreated?: boolean;
  isWeedProfileTwoCreated?: boolean;
  isWeedProfileThreeCreated?: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  isVerified: false,
  isWeedProfileOneCreated: false,
  isWeedProfileTwoCreated: false,
  isWeedProfileThreeCreated: false,
};

export interface LoginCredentials {
  username: string;
  password: string;
}
export interface SignupCredentials extends LoginCredentials {
  email: string;
  // rePassword: string;
  phone: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface OtpCredentials {
  otpCode: string;
}
interface WeedSetupOptions {
  selectedOption: string;
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      AsyncStorage.removeItem("persist:root");
    },
    completeSetup: (state) => {
      state.isAuthenticated = true;
      // console.log("User setup complete, authenticated status set to true.");
    },
    weedProfileOne: (state) => {
      state.isWeedProfileOneCreated = true;
    },
    weedProfileTwo: (state) => {
      state.isWeedProfileTwoCreated = true;
    },
    weedProfileThree: (state) => {
      state.isWeedProfileThreeCreated = true;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.success = false;
        state.isAuthenticated = false;
        state.token = null;
        state.user = null;
      })
      .addCase(loginAsync.fulfilled, (state, payload) => {
        const token = payload.payload?.token;
        if (token) {
          _setToken(token);
          state.token = payload.payload?.token;
          state.user = payload.payload?.data.user;
          state.isAuthenticated = true;
          state.success = false;
          state.loading = false;
        }
      })
      .addCase(signupAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(signupAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.success = false;
        state.isAuthenticated = false;
        state.token = null;
        state.user = null;
      })
      .addCase(signupAsync.fulfilled, (state, payload) => {
        const token = payload.payload?.token;
        if (token) {
          _setToken(token);
          // state.isAuthenticated = true;
          state.success = true;
          state.loading = false;
          state.token = payload.payload?.token;
          state.user = payload.payload?.data.user;
        }
        console.log(payload.payload?.data.user);
      })
      .addCase(verifyOtpAsync.pending, (state) => {
        state.loading = true;
        state.isVerified = false;
      })
      .addCase(verifyOtpAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.success = false;
        state.isVerified = false;
        // state.isAuthenticated = false;
        // state.token = null;
        // state.user = null;
      })
      .addCase(verifyOtpAsync.fulfilled, (state, payload) => {
        state.isVerified = true;
        console.log(payload.payload, "otp asdfghjk");
        state.success = true;
        state.loading = false;
        state.error = false;

        // state.isAuthenticated = true;
      });
  },
});

export const {
  logout,
  completeSetup,
  weedProfileOne,
  weedProfileThree,
  weedProfileTwo,
  setUser,
} = authSlice.actions;
export default authSlice.reducer;
