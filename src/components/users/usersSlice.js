import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [{
        id: 0,
        email: null,
        first_name: null,
        last_name: null,
        avatar: null,
    }],
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        }
    }
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;