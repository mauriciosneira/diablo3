export function setAccessToken (state, payload) {
    state.accessToken = payload
}

export function tokenError(state, payload) {
    state.error = true;
    state.errorMesssage = payload;
    state.accessToken = null;
}