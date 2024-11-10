import { setUser } from "@/slice/AuthSlice";
import axiosInstance from "@/utils/api";
import { CustomToaster } from "@/utils/core";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const uploadImageAsync = createAsyncThunk(
  "profile/uploadImageAsync",
  async (image: FormData, { rejectWithValue, getState }) => {
    const auth: any = getState();
    const token = auth?.auth?.token;

    try {
      const response = await axiosInstance.put("/profile/upload-image", image, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      CustomToaster("success", "Often Uploaded Image Successful", 2000);
      return response.data; // Use response.data for only the JSON content
    } catch (error: any) {
      CustomToaster("error", "Failed To upload image", 2000);
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
      CustomToaster("success", "Often Uploaded Image Successful", 2000);
      return response; // Use response.data for only the JSON content
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

export const getUserProfileAsync = createAsyncThunk(
  "profile/getUserProfileAsync",
  async (_, { rejectWithValue, getState, dispatch }) => {
    const auth: any = getState();
    const token = auth?.auth?.token;
    try {
      const response = await axiosInstance.get("/profile/get-profile", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data, "qwsdfghjuytrdfgh");
      dispatch(setUser(response.data));
      return response.data; // Use response.data for only the JSON content
    } catch (error: any) {
      CustomToaster("error", error.response.data.message, 2500);
      console.error(
        "profile/getUserProfileAsync:",
        error.response ? error.response.data : error.message
      );
      return rejectWithValue(error.response?.data || "Upload failed");
    }
  }
);
