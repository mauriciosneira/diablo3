import Vue from 'vue'
import { locales } from '../../utils/regions'

export async function getHero ( {commit, dispatch}, parameters ) {
    const { region, battleTag: account, heroId } = parameters
    let locale = locales[region]
    const params = {
        access_token: this.state.oauth.accessToken,
        locale
    }
    try {
        commit('setLoading', true, { root: true })
            const {data} = await Vue.axios({
                method : 'GET',
                url : `https://${region}.api.blizzard.com/d3/profile/${account}/hero/${heroId}`,
                params : params
        })
        commit('setHero', data)
    } catch (e) {
        const oauth = ( e.message.indexOf('401') !== -1 )
        const funtion = 'getHero'
        if(oauth){
            dispatch('oauth/getToken', null, { root: true }).then(() => {
                dispatch('reload', [parameters, funtion])
             })
        }
        commit('HeroError', e.message)
    } finally {
        commit('setLoading', false, { root: true })
    }
}

export async function getDetailedHeroItems ({commit, dispatch}, parameters ) {  
  const { region, battleTag: account, heroId } = parameters
    let locale = locales[region]
    const params = {
        access_token: this.state.oauth.accessToken,
        locale
    }
    try {
        commit('setLoading', true, { root: true })
            const {data} = await Vue.axios({
                method : 'GET',
                url : `https://${region}.api.blizzard.com/d3/profile/${account}/hero/${heroId}/items`,
                params : params
        })
        commit('setHeroItems', data)
    } catch (e) {
        const oauth = ( e.message.indexOf('401') !== -1 )
        const funtion = 'getDetailedHeroItems'
        if(oauth){
            dispatch('oauth/getToken', null, { root: true }).then(() => {
                dispatch('reload', [parameters, funtion])
             })
        }
        commit('HeroItemsError', e.message)
    } finally {
        commit('setLoading', false, { root: true })
    }
}

export function reload (context, parameters) {
    context.dispatch(parameters[1], parameters[0])
}