import axiosWithAuth from '../utils/axiosWithAuth';

export const GET_FRIENDS_LOADING = 'GET_FRIENDS_LOADING';
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS';
export const GET_FRIENDS_FAILURE = 'GET_FRIENDS_FAILURE';

export const friendsLoading = () => ({ type: GET_FRIENDS_LOADING });
export const friendsLoadingSuccess = data => ({ type: GET_FRIENDS_SUCCESS, payload: data });
export const friendsLoadingFailure = error => ({ type: GET_FRIENDS_FAILURE, payload: error });

export function getFriends() {
    return function(dispatch) {
        dispatch(friendsLoading());
        return axiosWithAuth()
        .get('/friends')
        .then(res => dispatch(friendsLoadingSuccess(res.data)))
        .catch(err => dispatch(friendsLoadingFailure(), err)
        );
    };
}
// export function getFriends() {
//     return function(dispatch) {
//         dispatch(friendsLoading());
//         return axios
//         .create({
//             headers: {
//                 authorization: localStorage.getItem('token')
//             }
//         })
//         .get('/friends')
//         .then(res => dispatch(friendsLoadingSuccess(res.data)))
//         .catch(err => dispatch(friendsLoadingFailure(), err)
//         );
//     };
// }

export const POST_NEW_FRIEND_POSTING = 'POST_NEW_FRIEND_POSTING';
export const POST_NEW_FRIEND_SUCCESS = 'POST_NEW_FRIEND_SUCCESS';
export const POST_NEW_FRIEND_FAILURE = 'POST_NEW_FRIEND_FAILURE';

export const newFriendPosting = () => ({ type: POST_NEW_FRIEND_POSTING })
export const newFriendSuccess = () => ({ type: POST_NEW_FRIEND_SUCCESS })
export const newFriendFailure = () => ({ type: POST_NEW_FRIEND_FAILURE })

export function postFriend(friend) {
    return function(dispatch) {
        dispatch(newFriendPosting());
        return axiosWithAuth()
        .post('/friends', friend)
        .then(res => {console.log(res.data)
            dispatch(newFriendSuccess())})
        .catch(err => dispatch(newFriendFailure(), err)
        );
    }
}