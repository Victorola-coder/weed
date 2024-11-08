import { User } from "@/model/user.model";
import axiosInstance from "@/utils/api";
import { SignUpSchema } from "@/utils/common";
import { CustomToaster, getSimplifiedError } from "@/utils/core";
import { _setToken } from "@/utils/storage";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface AuthState {
  user: null | User;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error?: boolean;
  success?: boolean;
  isVerified?: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  isVerified: false,
};

interface LoginCredentials {
  username: string;
  password: string;
}
interface SignupCredentials extends LoginCredentials {
  email: string;
  // rePassword: string;
  phone: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

interface OtpCredentials {
  otpCode: string;
}

export const uploadImageAsync = createAsyncThunk(
  "profile/uploadImageAsync",
  async (image: FormData, { rejectWithValue, getState }) => {
    const auth: any = getState();
    const token = auth?.auth?.token;
    console.log(`Bearer ${token}`, "Authorization Token");

    try {
      const response = await axiosInstance.put("/profile/upload-image", image, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MmQ2NmRhYzY4NDRmNzg4NjBmMGI5NyIsImlhdCI6MTczMTAyODcwMSwiZXhwIjoxNzMzNjIwNzAxfQ.VZr17PtxpHRmqHXIENU0oKFherm4gWdXUPdRhim-8GE`,
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data; // Use response.data for only the JSON content
    } catch (error: any) {
      console.error(
        "profile/uploadImageAsync:",
        error.response ? error.response.data : error.message
      );
      return rejectWithValue(error.response?.data || "Upload failed");
    }
  }
);
export const favouriteWayAsync = createAsyncThunk<any, any>(
  "profile/favouriteWayAsync",
  async (data, { rejectWithValue, getState }) => {
    const auth: any = getState();
    const token = auth?.auth?.token;
    console.log(`Bearer ${token}`, "Authorization Token");

    try {
      const response = await axiosInstance.patch(
        "/profile/setup-favourite-way",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data; // Use response.data for only the JSON content
    } catch (error: any) {
      console.error(
        "profile/favouriteWayAsync:",
        error.response ? error.response.data : error.message
      );
      return rejectWithValue(error.response?.data || "Upload failed");
    }
  }
);
export const setupOftenIndulgeAsync = createAsyncThunk<any, any>(
  "profile/setupOftenIndulgeAsync",
  async (data, { rejectWithValue, getState }) => {
    const auth: any = getState();
    const token = auth?.auth?.token;
    console.log(`Bearer ${token}`, "Authorization Token");

    try {
      const response = await axiosInstance.patch(
        "/profile/setup-often-indulge",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      CustomToaster("success", "Often Indulge Successful", 2000);
      return response.data; // Use response.data for only the JSON content
    } catch (error: any) {
      CustomToaster("error", error.response.data.message, 2000);
      console.error(
        "profile/setupOftenIndulgeAsync:",
        error.response ? error.response.data : error.message
      );
      return rejectWithValue(error.response?.data || "Upload failed");
    }
  }
);
export const setupPreferredStrainAsync = createAsyncThunk<any, any>(
  "profile/setupPreferredStrainAsync",
  async (data, { rejectWithValue, getState }) => {
    const auth: any = getState();
    const token = auth?.auth?.token;
    console.log(`Bearer ${token}`, "Authorization Token");

    try {
      const response = await axiosInstance.patch(
        "/profile/setup-preferred-strain",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      CustomToaster("success", "Preferred Strain", 2000);

      return response.data; // Use response.data for only the JSON content
    } catch (error: any) {
      CustomToaster("error", error.response.data.message, 2000);
      console.error(
        "profile/setupPreferredStrainAsync:",
        error.response ? error.response.data : error.message
      );
      return rejectWithValue(error.response?.data || "Upload failed");
    }
  }
);
export const setupPreferBalanceAsync = createAsyncThunk<any, any>(
  "profile/setupPreferBalanceAsync",
  async (data, { rejectWithValue, getState }) => {
    const auth: any = getState();
    const token = auth?.auth?.token;
    console.log(`Bearer ${token}`, "Authorization Token");

    try {
      const response = await axiosInstance.patch(
        "/profile/setup-prefer-balance",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      CustomToaster("success", "Preferred Balanaced Strain", 2000);

      return response.data; // Use response.data for only the JSON content
    } catch (error: any) {
      CustomToaster("error", error.response.data.message, 2000);

      console.error(
        "profile/setupPreferBalanceAsync:",
        error.response ? error.response.data : error.message
      );
      return rejectWithValue(error.response?.data || "Upload failed");
    }
  }
);
export const setupEffectCanaAsync = createAsyncThunk<any, any>(
  "profile/setupEffectCanaAsync",
  async (data, { rejectWithValue, getState }) => {
    const auth: any = getState();
    const token = auth?.auth?.token;
    console.log(`Bearer ${token}`, "Authorization Token");

    try {
      const response = await axiosInstance.patch(
        "/profile/setup-effect-cana",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data; // Use response.data for only the JSON content
    } catch (error: any) {
      console.error(
        "profile/setupEffectCanaAsync:",
        error.response ? error.response.data : error.message
      );
      return rejectWithValue(error.response?.data || "Upload failed");
    }
  }
);
export const setupRecreOrMedAsync = createAsyncThunk<any, any>(
  "profile/setupRecreOrMedAsync",
  async (data, { rejectWithValue, getState }) => {
    const auth: any = getState();
    const token = auth?.auth?.token;
    console.log(`Bearer ${token}`, "Authorization Token");

    try {
      const response = await axiosInstance.patch(
        "/profile/setup-recre-or-med",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data; // Use response.data for only the JSON content
    } catch (error: any) {
      console.error(
        "profile/setupRecreOrMedAsync:",
        error.response ? error.response.data : error.message
      );
      return rejectWithValue(error.response?.data || "Upload failed");
    }
  }
);
export const setupEnjoyCanAsync = createAsyncThunk<any, any>(
  "profile/setupEnjoyCanAsync",
  async (data, { rejectWithValue, getState }) => {
    const auth: any = getState();
    const token = auth?.auth?.token;
    console.log(`Bearer ${token}`, "Authorization Token");

    try {
      const response = await axiosInstance.patch(
        "/profile/setup-enjoy-cana",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data; // Use response.data for only the JSON content
    } catch (error: any) {
      console.error(
        "profile/setupEnjoyCanAsync:",
        error.response ? error.response.data : error.message
      );
      return rejectWithValue(error.response?.data || "Upload failed");
    }
  }
);
export const setupWeedProfile = createAsyncThunk<any, any>(
  "weedprofile/setupWeedProfile",
  async (data: Record<string, any>, { rejectWithValue, getState }) => {
    const auth: any = getState();
    const token = auth?.auth?.token;
    console.log(`Bearer ${token}`, "Authorization Token");

    try {
      const response = await axiosInstance.post(
        "/weedprofile/create-profile",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data; // Use response.data for only the JSON content
    } catch (error: any) {
      console.error(
        "weedprofile/setupWeedProfile:",
        error.response ? error.response.data : error.message
      );
      return rejectWithValue(error.response?.data || "Upload failed");
    }
  }
);

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
    CustomToaster("success", "Signup successfully", 2500);
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
      })
      .addCase(uploadImageAsync.pending, (state) => {
        state.loading = true;
        state.isVerified = false;
      })
      .addCase(uploadImageAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.success = false;
        state.isVerified = false;
        // state.isAuthenticated = false;
        // state.token = null;
        // state.user = null;
      })
      .addCase(uploadImageAsync.fulfilled, (state, payload) => {
        // state.isVerified = true;
        console.log(payload.payload, "otp asdfghjk");
        // state.success = true;
        state.loading = false;
        // state.error = false;

        // state.isAuthenticated = true;
      })
      .addCase(favouriteWayAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(favouriteWayAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(favouriteWayAsync.fulfilled, (state, payload) => {
        state.loading = false;
        state.error = false;
        console.log(payload, "favorite");
      })
      .addCase(setupOftenIndulgeAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupOftenIndulgeAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(setupOftenIndulgeAsync.fulfilled, (state, payload) => {
        state.loading = false;
        state.error = false;
        console.log(payload, "often indulge");
      })
      .addCase(setupPreferredStrainAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupPreferredStrainAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(setupPreferredStrainAsync.fulfilled, (state, payload) => {
        state.loading = false;
        state.error = false;
        console.log(payload, "strain type");
      })
      .addCase(setupPreferBalanceAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupPreferBalanceAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(setupPreferBalanceAsync.fulfilled, (state, payload) => {
        state.loading = false;
        state.error = false;
        console.log(payload, "balance type");
      })
      .addCase(setupEffectCanaAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupEffectCanaAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(setupEffectCanaAsync.fulfilled, (state, payload) => {
        state.loading = false;
        state.error = false;
        console.log(payload, "effect cana type");
      })
      .addCase(setupRecreOrMedAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupRecreOrMedAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(setupRecreOrMedAsync.fulfilled, (state, payload) => {
        state.loading = false;
        state.error = false;
        console.log(payload, "rec or med type");
      })
      .addCase(setupEnjoyCanAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupEnjoyCanAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(setupEnjoyCanAsync.fulfilled, (state, payload) => {
        state.loading = false;
        state.error = false;
        console.log(payload, "enjoy type");
      })
      .addCase(setupWeedProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(setupWeedProfile.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(setupWeedProfile.fulfilled, (state, payload) => {
        state.loading = false;
        state.error = false;
        console.log(payload, "weed setuo");
      });
  },
});

export const { logout, completeSetup } = authSlice.actions;
export default authSlice.reducer;
