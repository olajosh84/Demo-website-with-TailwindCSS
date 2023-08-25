import { configureStore } from "@reduxjs/toolkit";
import slideSlice from "./features/slides/slideSlice";

export const store = configureStore({
    reducer: {
        slide: slideSlice,
    }
})