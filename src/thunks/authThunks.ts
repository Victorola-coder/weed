import {
  AuthResponse,
  LoginCredentials,
  OtpCredentials,
  SignupCredentials,
} from "@/slice/AuthSlice";
import axiosInstance from "@/utils/api";
import { CustomToaster } from "@/utils/core";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

export const loginAsync = createAsyncThunk<
  AxiosResponse<AuthResponse>,
  LoginCredentials
>("auth/loginAsync", async (credentials, { rejectWithValue }) => {
  try {
    // Return `response.data` instead of the full response
    const response = await axiosInstance.post<AuthResponse>(
      "/auth/login",
      credentials
    );
    CustomToaster("success", "Login successfully", 1000);
    return response; // Now correctly returns AuthResponse type
  } catch (error: any) {
    console.log(error?.response.data.error, "dddddd");
    return rejectWithValue(
      CustomToaster("error", error.response?.data?.error, 1000)
    );
    // return rejectWithValue(
    //   getSimplifiedError(error.response ? error : error)
    // );
  }
});

export const signupAsync = createAsyncThunk<
  AxiosResponse<AuthResponse>,
  SignupCredentials
>("auth/signupAsync", async (credentials, { rejectWithValue }) => {
  try {
    // Return `response.data` instead of the full response
    const response = await axiosInstance.post<AuthResponse>(
      "/auth/signup",
      credentials
    );
    CustomToaster(
      "success",
      `Signup successfully ${response.data.user.otp.code}`,
      12000
    );
    return response; // Now correctly returns AuthResponse type
  } catch (error: any) {
    console.log(error?.response.data.error, "dddddd");
    return rejectWithValue(
      CustomToaster("error", error.response?.data?.error, 2500)
    );
    // return rejectWithValue(
    //   getSimplifiedError(error.response ? error : error)
    // );
  }
});
export const verifyOtpAsync = createAsyncThunk<
  AxiosResponse<any>,
  OtpCredentials
>("auth/verifyOtpAsync", async (credentials, { rejectWithValue }) => {
  try {
    // Return `response.data` instead of the full response
    const response = await axiosInstance.post<AuthResponse>(
      "/auth/verify",
      credentials
    );
    CustomToaster("success", "Verification successfully", 2500);
    return response; // Now correctly returns AuthResponse type
  } catch (error: any) {
    console.log(error?.response.data.error, "dddddd");
    return rejectWithValue(
      CustomToaster("error", error.response?.data?.error, 2500)
    );
    // return rejectWithValue(
    //   getSimplifiedError(error.response ? error : error)
    // );
  }
});
