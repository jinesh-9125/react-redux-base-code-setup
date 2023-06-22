import { createSlice } from "@reduxjs/toolkit";
const testReducer = createSlice({
  name: "test",
  initialState: {
    count: 0,
  },
  reducers: {
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export default testReducer;
