import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { db } from "../firebase";
import { orderBy, query, collection, getDocs } from "firebase/firestore";

export const getBlogs = createAsyncThunk(
  "userblogs/getBlogs",
  async (_, { rejectWithValue }) => {
    try {
      const init = query(collection(db, "Blogs"), orderBy("createdAt", "desc"));
      const res = await getDocs(init);
      return res;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const getCategories = createAsyncThunk(
  "userblogs/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const init = query(collection(db, "Categories"));
      const res = await getDocs(init);
      return res;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const initialState = {
  blogs: [],
  categories: [],
  status: "loading",
  error: null,
};

const dataSlice = createSlice({
  name: "userblogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.fulfilled, (state, { payload }) => {
        state.blogs = payload.docs.map((d) => d.data());
        state.status = "idle";
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.categories = payload.docs.map((d) => d.data());
        state.status = "idle";
      });
  },
});

export default dataSlice.reducer;
