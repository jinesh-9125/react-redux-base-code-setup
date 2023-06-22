import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  // eslint-disable-next-line no-undef
  test: testReducer,
});

const store = configureStore(rootReducer);

export default store;
