import hobbyReducer from "./hobby";
import userReducer from "./user";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    hobby: hobbyReducer,
    user: userReducer,
});

export default rootReducer;