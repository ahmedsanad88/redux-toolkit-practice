// new way of merging reducer and actions and updated state and 
// we don't use spread operator as redux toolkit using (( Immer )) inside to allow us to write "mutating" update logic that becomes correct immutable updates.

import { createSlice } from '@reduxjs/toolkit';

// must have initialState here or inside your reducer.
const initialState = {
    products: [{
        id: 0,
        title: null,
        price: 0,
        category: null,
        description: null,
        image: null    
    }]
};

// Reducer and actions together.
export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setPorducts: (state, action) => {
            state.products = action.payload;
        }
    }
});

export const { setPorducts } = productsSlice.actions;

export default productsSlice.reducer;