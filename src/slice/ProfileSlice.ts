import {
  favouriteWayAsync,
  getUserProfileAsync,
  setupEffectCanaAsync,
  setupEnjoyCanAsync,
  setupOftenIndulgeAsync,
  setupPreferBalanceAsync,
  setupPreferredStrainAsync,
  setupRecreOrMedAsync,
  uploadImageAsync,
} from "@/thunks/profileThunks";
import { createSlice } from "@reduxjs/toolkit";

export interface ProfileSlice {
  loading: boolean;
  success: boolean;
  error: boolean;
}

const initialState: ProfileSlice = {
  loading: false,
  error: false,
  success: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(uploadImageAsync.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = false;
      })
      .addCase(uploadImageAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.success = false;
        // state.isAuthenticated = false;
        // state.token = null;
        // state.user = null;
      })
      .addCase(uploadImageAsync.fulfilled, (state, payload) => {
        console.log(payload.payload, "otp asdfghjk");
        // state.success = true;
        state.loading = false;
        // state.error = false;

        // state.isAuthenticated = true;
      })
      .addCase(favouriteWayAsync.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = false;
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
        state.success = false;
        state.error = false;
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
        state.success = false;
        state.error = false;
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
        state.success = false;
        state.error = false;
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
        state.success = false;
        state.error = false;
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
        state.success = false;
        state.error = false;
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
        state.success = false;
        state.error = false;
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
      .addCase(getUserProfileAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserProfileAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getUserProfileAsync.fulfilled, (state, payload) => {
        state.loading = false;
        state.error = false;
        // state.user = payload.payload;
        // console.log(payload.payload, "get user profile ");
      });
  },
});

export default profileSlice.reducer;
