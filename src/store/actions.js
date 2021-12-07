import request from "../components/request"

const apiurl  = "https://brainstorm-interview-task.herokuapp.com"

export function getUsers() {
    return (dispatch) => {
        request( `${apiurl}/users`)
            .then(res => {
                dispatch({ type: "GET_USERS", users: res });
            })
            .catch(err => {
                dispatch({ type: "ERROR", error: err.message });
            })
    }

}

export function addUser(data) {
    return (dispatch) => {
        request(`${apiurl}/users`, 'POST', data)
            .then(res => {
                dispatch({ type: "ADD_USER", user: res });
            })
            .catch(err => {
                dispatch({ type: "ERROR", error: err.message });
            });

    }
}
export function editUser(data) {
    console.log(data.id)
    return (dispatch) => {
        request(`${apiurl}/users/${data.id}`, 'PUT', data)
            .then(editedUser => {
                console.log(editedUser)
                // dispatch({ type: "DIT_USER", user: editedUser });
            })
            .catch(err => {
                dispatch({ type: "ERROR", error: err.message });
            });

    }
}

export function removeUser(userId) {
    return (dispatch) => {
        request(`${apiurl}/users/${userId}`, 'DELETE')
            .then(res => {
                dispatch({ type: "REMOVE_USER", userId});
            })
            .catch(err => {
                dispatch({ type: "ERROR", error: err.message });
            });

    }
}

