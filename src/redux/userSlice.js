import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './userOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;


// const handleAuthUser = (state, action) => {
//     state.user = action.payload.user;
//     state.token = action.payload.token;
//     state.isLoggedIn = true;
// };

// const handleLogOutUser = (state) => {
//     state.user = { name: null, email: null };
//     state.token = null;
//     state.isLoggedIn = false;
// };

// const hadleRefreshUser = (state, action) => {
//     state.user = action.payload;
//     state.isLoggedIn = true;
//     state.isRefreshing = false;
// };

// const authSlice = createSlice({
//     name: "user",
//     initialState: {
//         user: { name: null, email: null },
//         token: null,
//         isLoggedIn: false,
//         isRefreshing: false,
//     },
//     extraReducers: builder =>
//         builder
//             .addCase(register.fulfilled, handleAuthUser)
//             .addCase(logIn.fulfilled, handleAuthUser)
//             .addCase(logOut.fulfilled, handleLogOutUser)
//             .addCase(refreshUser.pending, state => {
//                 state.isRefreshing = true;
//             })
//             .addCase(refreshUser.fulfilled, hadleRefreshUser)
//             .addCase(refreshUser.rejected, state => {
//                 state.isRefreshing = false;
//             })
// });

// export const authReducer = authSlice.reducer;