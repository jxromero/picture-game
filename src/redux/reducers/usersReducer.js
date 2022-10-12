const initialState = [];

const usersReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_USER':
            return state = [...state, action.payload];
        case 'DELETE_USER':
            return state = state.filter((user) => user.id !== action.payload);
        case 'ADD_USER_POINT':
            return state = state.map((user) => user.id === action.payload ? {
                ...user,
                score: user.score + 1
            } : user);
        case 'SUBTRACT_USER_POINT':
            return state = state.map((user) => user.id === action.payload ? {
                ...user,
                score: user.score - 1
            } : user);
        case 'SORT_USER':
            return state = state.sort((a, b) => b.score - a.score);
        default:
            return state;
    }
}

export default usersReducer;