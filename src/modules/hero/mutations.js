export function setHero (state, payload) {
    state.hero = payload
}

export function HeroError(state, payload) {
    state.error = true;
    state.errorMesssage = payload;
    state.hero= {
        skills: {
            active:[],
            passive:[]
        }
    }
}

export function setHeroItems (state, payload) {
    state.items = payload
}

export function HeroItemsError(state, payload) {
    state.error = true;
    state.errorMesssage = payload;
    state.items = {
        item: {}
    }
}