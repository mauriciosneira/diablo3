export function setProfile (state, payload) {
    state.profileData = payload
}

export function ProfileError(state, payload) {
    state.error = true;
    state.errorMesssage = payload;
    state.profileData = null;
    state.profileData =  {
        heroes:{},
        progression:{}
    }
}
