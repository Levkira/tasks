import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import currentUser from './features/auth/slices/currentUserSlice'
import authMiddleware from './features/auth/middlewares/auth'
import { reducer as formReducer } from 'redux-form'
import users from './features/users/slices/usersSlice';
import posts from './features/posts/slices/postsSlice';


const middleware = [...getDefaultMiddleware(), authMiddleware];

const store = configureStore({
    reducer: {
        currentUser,
        users,
        posts,
        form: formReducer
    },
    devTools: true,
    middleware
});

export default store;

