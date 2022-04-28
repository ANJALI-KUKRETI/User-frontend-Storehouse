import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../Reducers/dataSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  middleware: (middleware) =>
    middleware({
      serializableCheck: false,
    }),
});
