//If the user is already logged in, then block access to the register and login pages
export default function ({ store, redirect }) {
    if (store.state.auth.loggedIn) {
        return redirect("/");
    }
}