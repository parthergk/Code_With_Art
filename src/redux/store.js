import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import subNavSlice from "./subNavSlice";

const store = configureStore({
    reducer : {
        nav : navSlice,
        subNav : subNavSlice
    }
})

export default store;