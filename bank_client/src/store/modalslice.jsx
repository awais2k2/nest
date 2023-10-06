import { createSlice } from "@reduxjs/toolkit";

const initialModals = {
  showsend: false,
  showbank: false,
  showrecipent: false,
  showpin: false,
  transactionmsg: false,
};

const Modalslice = createSlice({
  name: "modal",
  initialState: initialModals,
  reducers: {
    togglesendmodel(state) {
      state.showsend = true;
    },
    hidesendmodal(state) {
      state.showsend = false;
    },
    showbankmodal(state) {
      state.showbank = true;
      state.showsend = false;
    },
    hidebankmodal(state) {
      state.showbank = false;
    },
    showrecipentmodal(state) {
      state.showbank = false;
      state.showrecipent = true;
    },
    hiderecipentmodal(state) {
      state.showrecipent = false;
    },
    showpinmodal(state) {
      state.showrecipent = false;
      state.showpin = true;
    },
    hidepinmodal(state) {
      state.showpin = false;
    },
    showtransactionmsg(state) {
      state.transactionmsg = true;
    },
    hidetransactionmsg(state) {
      state.transactionmsg = false;
    },
  },
});

export default Modalslice;
