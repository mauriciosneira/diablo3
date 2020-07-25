import Vue from 'vue'

const clientId = process.env.VUE_APP_CLIENT_ID
const clientSecret = process.env.VUE_APP_CLIENT_SECRET
const url = process.env.VUE_APP_APIURL

export async function getToken ( {commit} ){
    try {
        commit('setLoading', true, { root: true })
        const body = new FormData()
        body.append('grant_type', 'client_credentials')
        const config = {
            headers: { 'Content-Type': 'multipart/form-data' },
            auth: { username: clientId, password: clientSecret }
        }
        const {data} = await Vue.axios.post( url, body, config )
        commit('setAccessToken', data.access_token)
    } catch (e) {
        commit('tokenError', e.message)
    } finally {
        commit('setLoading', false, { root: true })
    }
}