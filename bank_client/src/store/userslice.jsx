import { createSlice } from "@reduxjs/toolkit";

const initialuser = {
  user: {
    id: "",
    phone: "",
    pin: "",
    balance: "",
    name: "",
    email: "",
    transactions: [],
  },
};

const UserSlice = createSlice({
  name: "user",
  initialState: initialuser,
  reducers: {
    updateUser(state, action) {
      state.user = action.payload;
    },
  },
});

export default UserSlice;
