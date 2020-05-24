import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiClient from '../../../api-client';

const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (thunkAPI) => {
        const response = await apiClient.get('/api/posts');
        return response.data;
    }
);

const likePost = createAsyncThunk(
    'posts/likePost',
    async (postId, thunkAPI) => {
        const response = await apiClient.post(`/api/posts/${postId}/like`);
        return response.data;
    },
);

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isFetching: false
    },
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.isFetching = true
        },
        [fetchPosts.fulfilled]: (state, action) => {

            state.posts = action.payload;
            state.isFetching = false;
        },
        [likePost.fulfilled]: (state, action) => {
            state.isFetching = false;
            const post = state.posts.find(post => post._id === action.payload.post); 
            post.likes.push(action.payload)
        },
    }
});

export { fetchPosts, likePost }
export default postsSlice.reducer;