const defaultState = {
    users: [],

}
const reducer = (state = defaultState, action) => {
    switch (action.type) {

        case 'GET_USERS': {
            return {
                ...state,
                users: action.users,
            }
        }
        case 'ADD_USER': {
            const newUsers = [action.user, ...state.users];

            return {
                ...state,
                users: newUsers,
            }
        }
        case 'EDIT_USER': {
            const users = [...state.users];
            const foundUserIndex = users.findIndex((user)=> user.id===action.user.id);
            users[foundUserIndex] = action.user
            return {
                ...state,
                users: users,
            }
        }
        case "REMOVE_USER": {
               const newUsers = state.users.filter(user => user.id !== action.userId);
   
               return {
                  ...state,
                  users: newUsers,
               }
   
         }

        default: return state
    }
}
export { reducer }