import axiosInstance from "@/utils/api";
import { CustomToaster } from "@/utils/core";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
      CustomToaster("success", "Successfully updated", 2500);
      return response.data; // Use response.data for only the JSON content
    } catch (error: any) {
      CustomToaster(
        "error",
        error.response.data.message || error.response.data.error,
        2500
      );
      console.error(
        "weedprofile/setupWeedProfile:",
        error.response ? error.response.data : error.message
      );
      return rejectWithValue(error.response?.data || "Upload failed");
    }
  }
);
