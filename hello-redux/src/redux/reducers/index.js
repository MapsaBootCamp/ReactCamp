import { combineReducers } from "@reduxjs/toolkit";
import handleCount from "./handleCount";

const rootReducers = combineReducers({
  handleCount,
});

export default rootReducers;
