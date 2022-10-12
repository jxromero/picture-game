export const addUser = (userDetails) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_USER',
            payload: userDetails
        })
    }
}

export const deleteUser = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'DELETE_USER',
            payload: id
        })
    }
}

export const addUserPoint = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_USER_POINT',
            payload: id
        })
    }
}

export const subtractUserPoint = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'SUBTRACT_USER_POINT',
            payload: id
        })
    }
}

export const sortUser = () => {
    return (dispatch) => {
        dispatch({
            type: 'SORT_USER'
        })
    }
}