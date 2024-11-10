import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/slice/AuthSlice";
import profileReducer from "@/slice/ProfileSlice";
import weedProfileReducer from "@/slice/WeedSlice";
import { useDispatch } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  // whitelist: ["auth"], // Only persist the auth slice
};
const persistedReducer = persistReducer(persistConfig, authReducer);
export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    profile: profileReducer,
    weedProfile: weedProfileReducer,
    // Add other reducers here as needed.
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Needed for redux-persist
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = () =>
  useDispatch<AppDispatch>();
