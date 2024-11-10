import { setupWeedProfile } from "@/thunks/weedProfileThunk";
import { createSlice } from "@reduxjs/toolkit";

export interface WeedProfileSlice {
  loading: boolean;
  success: boolean;
  error: boolean;
}

const initialState: WeedProfileSlice = {
  loading: false,
  error: false,
  success: false,
};

const weedProfileSlice = createSlice({
  name: "weedprofile",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
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

export default weedProfileSlice.reducer;
