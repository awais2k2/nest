import { createSlice } from "@reduxjs/toolkit";
const initialSlidebar = { showMenu: false, showlogin: true, showalert: false };

const NavSlice = createSlice({
  name: "navbar",
  initialState: initialSlidebar,
  reducers: {
    toggleMenu(state) {
      state.showMenu = !state.showMenu;
    },
    togglelogin(state) {
      state.showlogin = true;
    },
    hidelogin(state) {
      state.showlogin = false;
    },
    showalert(state) {
      state.showalert = true;
    },
    hidealert(state) {
      state.showalert = false;
    },
  },
});

export default NavSlice;
