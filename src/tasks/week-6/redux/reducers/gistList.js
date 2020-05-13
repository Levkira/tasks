import { combineReducers } from 'redux';
import { FETCH_GISTS_REQUEST, FETCH_GISTS_SUCCESS, FETCH_GISTS_CONTENT } from "../actions/list";

function gistsReducer(state = {
    isLoading: false,
    items: []
}, action) {
    switch (action.type) {
        case FETCH_GISTS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_GISTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: action.payload
            }
        default: return state;
    }
}

function selectedGistReducer(state = '', action) {
    switch (action.type) {
        case FETCH_GISTS_CONTENT:
            return action.payload
        default: return state;
    }
}

const rootReducer = combineReducers({
    gists: gistsReducer,
    selectedGist: selectedGistReducer
})

export default rootReducer;