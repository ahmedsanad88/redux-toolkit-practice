// creating store for redux toolkit using configureStore and import all
// reducers you using cross you app.

import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../components/users/usersSlice';
import productsReducer from '../components/products/productsSlice';


// here shown how to export the store to be used around our main index
// file.
export const store = configureStore({
  reducer: {
      users: usersReducer,
      products: productsReducer,
  },
});