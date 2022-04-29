import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { db } from "../firebase";
import {
  orderBy,
  query,
  collection,
  getDocs,
  where,
  limit,
  startAfter,
  endBefore,
  limitToLast,
} from "firebase/firestore";

export const getBlogs = createAsyncThunk(
  "userblogs/getBlogs",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const init = query(
        collection(db, "Blogs"),
        orderBy("createdAt", "desc"),
        limit(4)
      );
      const res = await getDocs(init);
      const initForLength = query(
        collection(db, "Blogs"),
        orderBy("createdAt", "desc")
      );
      const resL = await getDocs(initForLength);
      const temp = resL.docs.map((d) => d.data());
      dispatch(setLength(temp.length));
      const lastVisible = res.docs[res.docs.length - 1];
      dispatch(setLastVisible(lastVisible));
      const lastVisibleFirst = res.docs[0];
      dispatch(setFirstVisible(lastVisibleFirst));
      return res;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const getNextBlogs = createAsyncThunk(
  "userblogs/getNext",
  async (last, { rejectWithValue, dispatch }) => {
    try {
      const init = query(
        collection(db, "Blogs"),
        orderBy("createdAt", "desc"),
        startAfter(last),
        limit(4)
      );
      const res = await getDocs(init);
      const lastVisible = res.docs[res.docs.length - 1];
      dispatch(setLastVisible(lastVisible));
      const lastVisibleFirst = res.docs[0];
      dispatch(setFirstVisible(lastVisibleFirst));
      return res;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const getPrevBlogs = createAsyncThunk(
  "userblogs/getPrev",
  async (first, { rejectWithValue, dispatch }) => {
    try {
      const init = query(
        collection(db, "Blogs"),
        orderBy("createdAt", "desc"),
        endBefore(first),
        limitToLast(5)
      );
      const res = await getDocs(init);

      const lastVisibleFirst = res.docs[0];
      dispatch(setFirstVisible(lastVisibleFirst));
      const lastVisible = res.docs[res.docs.length - 1];
      dispatch(setLastVisible(lastVisible));
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
export const getBlogsCategoryWise = createAsyncThunk(
  "userblogs/getBlogsCategoryWise",
  async (category, { rejectWithValue, dispatch }) => {
    try {
      if (category === "All") {
        const init = query(
          collection(db, "Blogs"),
          orderBy("createdAt", "desc"),
          limit(4)
        );
        const res = await getDocs(init);
        const initForLength = query(collection(db, "Blogs"));
        const resL = await getDocs(initForLength);
        const temp = resL.docs.map((d) => d.data());
        dispatch(setLength(temp.length));
        const lastVisible = res.docs[res.docs.length - 1];
        dispatch(setLastVisible(lastVisible));
        const lastVisibleFirst = res.docs[0];
        dispatch(setFirstVisible(lastVisibleFirst));
        return res;
      } else {
        const init = query(
          collection(db, "Blogs"),
          where("category", "==", category)
        );
        const res = await getDocs(init);
        const initForLength = query(
          collection(db, "Blogs"),
          where("category", "==", category)
        );
        const resL = await getDocs(initForLength);
        const temp = resL.docs.map((d) => d.data());
        dispatch(setLength(temp.length));
        const lastVisible = res.docs[res.docs.length - 1];
        dispatch(setLastVisible(lastVisible));
        const lastVisibleFirst = res.docs[0];
        dispatch(setFirstVisible(lastVisibleFirst));
        return res;
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const initialState = {
  blogs: [],
  categories: [],
  recents: [],

  last: null,
  first: null,
  length: 0,
  status: "loading",
  error: null,
};

const dataSlice = createSlice({
  name: "userblogs",
  initialState,
  reducers: {
    setLastVisible: (state, action) => {
      state.last = action.payload;
    },
    setFirstVisible: (state, action) => {
      state.first = action.payload;
    },
    setLength: (state, action) => {
      state.length = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.fulfilled, (state, { payload }) => {
        state.blogs = payload.docs.map((d) => d.data());
        state.recents = payload.docs.map((d) => d.data());
        state.status = "idle";
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.categories = payload.docs.map((d) => d.data());
        state.status = "idle";
      })
      .addCase(getBlogsCategoryWise.pending, (state) => {
        state.status = "loadingBlogs";
      })
      .addCase(getBlogsCategoryWise.fulfilled, (state, { payload }) => {
        state.blogs = payload.docs.map((d) => d.data());
        state.status = "idle";
      })
      .addCase(getNextBlogs.pending, (state) => {
        state.status = "loadingBlogs";
      })
      .addCase(getNextBlogs.fulfilled, (state, { payload }) => {
        state.blogs = payload.docs.map((d) => d.data());
        state.status = "idle";
      })
      .addCase(getPrevBlogs.pending, (state) => {
        state.status = "loadingBlogs";
      })
      .addCase(getPrevBlogs.fulfilled, (state, { payload }) => {
        state.blogs = payload.docs.map((d) => d.data());
        state.status = "idle";
      });
  },
});

export const { setLastVisible, setFirstVisible, setLength } = dataSlice.actions;
export default dataSlice.reducer;
