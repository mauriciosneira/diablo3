import Vue from 'vue'
import { locales } from '../../utils/regions'

export async function getApiAccount( {commit, dispatch}, parameters ) {
    const { region, battleTag: account } = parameters
    let locale = locales[region]
    const params = {
        access_token: this.state.oauth.accessToken,
        locale
      }
    try {
        commit('setLoading', true, { root: true })
        const {data} = await Vue.axios({
            method : 'GET',
            url : `https://${region}.api.blizzard.com/d3/profile/${account}/`,
            params : params
        })
        commit('setProfile', data)
    } catch (e) {
        const oauth = ( e.message.indexOf('401') !== -1 ) 
        if(oauth){
            dispatch('oauth/getToken', null, { root: true }).then(() => {
                dispatch('reload', parameters)
             })
        }
        commit('ProfileError', e.message)
    } finally {
        commit('setLoading', false, { root: true })
    }
}

export function reload (context, parameters) {
    context.dispatch('getApiAccount', parameters)
}