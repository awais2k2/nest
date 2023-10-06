import { createSlice } from "@reduxjs/toolkit";

const initialuserAuth = {
  alluser: [],
};

const UserAuthSlice = createSlice({
  name: "userAuth",
  initialState: initialuserAuth,
  reducers: {
    alluser(state, action) {
      state.alluser.push(...action.payload);
    },
  },
});

export default UserAuthSlice;
