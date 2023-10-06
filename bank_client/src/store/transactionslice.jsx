import { createSlice } from "@reduxjs/toolkit";

const initialtransaction = {
  amount: 0,
  bank: "",
  recipent: 0,
  banks: [
    "jazzcash",
    "easypaisa",
    "hbl",
    "meezaanbank",
    "silkbank",
    "nayapay",
    "islamicbank",
    "zindagi",
    "firstpay",
    "faisalbank",
    "paymax",
    "alliedbank",
    "sadapay",
    "bankalhabib",
  ],
};

const Transactionslice = createSlice({
  name: "transaction",
  initialState: initialtransaction,
  reducers: {
    addamount(state, amount) {
      state.amount = amount.payload;
    },
    addbank(state, bank) {
      state.bank = bank.payload;
    },
    addrecipent(state, recipent) {
      state.recipent = recipent.payload;
    },
    pushtransaction(state, trans) {
      state.transactions.push(trans.payload);
    },
    pushtransactionchart(state, trans) {
      state.transactionschart.push(trans.payload);
    },
  },
});

export default Transactionslice;
