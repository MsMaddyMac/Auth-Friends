import { 
    GET_FRIENDS_LOADING, GET_FRIENDS_SUCCESS,
    GET_FRIENDS_FAILURE, POST_NEW_FRIEND_POSTING,
    POST_NEW_FRIEND_SUCCESS, POST_NEW_FRIEND_FAILURE
} from '../actions';

const initialState = {
    friends: [],
    error: null,
    isFetching: false
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_FRIENDS_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case GET_FRIENDS_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                isFetching: false,
                error: null
            };
        case GET_FRIENDS_FAILURE:
            return {
                ...state,
                friends: [],
                isFetching: false,
                error: action.payload
            };
        case POST_NEW_FRIEND_POSTING:
            return {
                ...state,
                isFetching: true,
                errors: null,
                friends: []
            };
        case POST_NEW_FRIEND_SUCCESS:
            return {
                ...state,
                isFetching: false,
                errors: null,
                friends: action.payload
            };
        case POST_NEW_FRIEND_FAILURE:
            return {
                ...state,
                isFetching: false,
                errors: action.payload,
                friends: []
            };
        default:
            return state;
        }
}

export default reducer