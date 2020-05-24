import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import apiClient from '../../../api-client';

const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (thunkAPI) => {
        const response = await apiClient.get('/api/users');
        return response.data;
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        isFetching: false
    },
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.isFetching = true;
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
            state.isFetching = false;
        }
    }
});

export  {fetchUsers};
export default usersSlice.reducer;