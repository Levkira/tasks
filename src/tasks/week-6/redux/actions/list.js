import axios from 'axios';

export const FETCH_GISTS_REQUEST = 'FETCH_GISTS_REQUEST';
export const FETCH_GISTS_SUCCESS = 'FETCH_GISTS_SUCCESS';
export const FETCH_GISTS_CONTENT = 'FETCH_GISTS_CONTENT';
export const FETCH_GISTS_CONTENT_REQUEST = 'FETCH_GISTS_CONTENT_REQUEST';

const fetchGistsRequests = () => ({
    type: FETCH_GISTS_REQUEST
})

const fetchGistsSuccess = (response) => ({
    type: FETCH_GISTS_SUCCESS,
    payload: response
})

const fetchContentRequests = () => ({
    type: FETCH_GISTS_CONTENT_REQUEST
})
const fetchContent = (response) => ({
    type: FETCH_GISTS_CONTENT,
    payload: response
})

export function fetchGists() {
    return dispatch => {
        dispatch(fetchGistsRequests())
        axios.get(`https://api.github.com/gists/public`)
            .then(function (response) {
                const resObj = response.data.reduce(function (prev, next) {
                    return {
                        ...prev,
                        ...next.files
                    };
                }, {});
                const res = Object.values(resObj);
                dispatch(fetchGistsSuccess(res));
            })
    }

}

export function fetchGistContent(item) {
    return dispatch => {
        dispatch(fetchContentRequests())
        axios.get(item.raw_url)
            .then(response => {
                console.log(typeof response.data)
                dispatch(fetchContent(response.data))
            })
    };
}
