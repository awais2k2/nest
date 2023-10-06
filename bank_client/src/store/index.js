import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userslice";
import Modalslice from "./modalslice";
import NavSlice from "./navslice";
import Transactionslice from "./transactionslice";
import UserAuthSlice from "./authenticationSlice";

const store = configureStore({
  reducer: {
    navbars: NavSlice.reducer,
    user: UserSlice.reducer,
    modal: Modalslice.reducer,
    transaction: Transactionslice.reducer,
    userauth: UserAuthSlice.reducer,
  },
});

export const useraction = UserSlice.actions;
export const navAction = NavSlice.actions;
export const modalaction = Modalslice.actions;
export const transactionaction = Transactionslice.actions;
export const userauthaction = UserAuthSlice.actions;

export default store;
