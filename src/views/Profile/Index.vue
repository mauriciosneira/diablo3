<template>
  <div>
    <h1>Profile View</h1>
      <profile-content :profile-data="profileData"></profile-content>
      <artisan :artisans="getArtisan"></artisan>
  </div>
</template>

<script>
  import  ProfileContent from '@/components/Profile/ProfileContent'
  import Artisan from '@/components/Profile/Artisan/ListArtisan'
  import {mapActions, mapState, mapGetters} from 'vuex'

  export default {
    name: 'Profile',
    components: {
      ProfileContent, Artisan
    },
    mounted () {
        this.getApiAccount(this.$route.params)
    },
    computed: {
      ...mapState('profile', ['profileData']),
      ...mapGetters('profile', ['getArtisan']),
    },
    methods: {
      ...mapActions('profile', ['getApiAccount']),
    }
  }
</script>