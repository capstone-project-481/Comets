//Getters for isAuthenticated(Checks if the user is logged in or not) and loggedInUser(Gets the current user's information)
export const getters = {
    isAuthenticated(state) {
        return state.auth.loggedIn;
    },
    loggedInUser(state){
        return state.auth.user
    },
};