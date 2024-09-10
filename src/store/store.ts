import { configureStore } from "@reduxjs/toolkit";

import {userSlice} from "./features/userSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
    reducer : {
       user: userSlice.reducer
    },
});
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
export const useAppDispatch:()=> typeof store.dispatch=useDispatch;
export default store;
