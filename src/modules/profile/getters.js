export function hasHeroes (state) {
    return state.profileData.heroes.length > 0
}

export function getTopHeroes (state) {
    return state.profileData.heroes.slice(0, 3)
}

export function getRestHeroes (state) {
    return state.profileData.heroes.slice(3, state.profileData.heroes.length)
}

export function getStart (state) {
    const { paragonLevel, kills, timePlayed } = state.profileData
    return { paragonLevel, kills, timePlayed }
}

export function getArtisan (state) {
    return {
        blacksmith: state.profileData.blacksmith,
        blacksmithHardcore: state.profileData.blacksmithHardcore,
        jeweler: state.profileData.jeweler,
        jewelerHardcore: state.profileData.jewelerHardcore,
        mystic: state.profileData.mystic,
        mysticHardcore: state.profileData.mysticHardcore
      }
}

export function getArtisanInfo() {
    return (artisans) => {
        return [
            {
                name: 'blacksmith',
                icon: 'hammer',
                emoji: '⚒',
                color: '#ffb74d',
                normal: artisans.blacksmith,
                hardcore: artisans.blacksmithHardcore
            },
            {
                name: 'jeweler',
                icon: 'gem',
                emoji: '💎',
                color: '#4dd0e1',
                normal: artisans.jeweler,
                hardcore: artisans.jewelerHardcore
            },
            {
                name: 'mystic',
                icon: 'hat-wizard',
                emoji: '🔮',
                color: '#ba68c8',
                normal: artisans.mystic,
                hardcore: artisans.mysticHardcore
            }
        ]
    }
}