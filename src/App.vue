<template>
  <div id="app">
    <loading :active.sync="loading"></loading>
      <main-layout></main-layout>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import MainLayout from '@/components/Layouts/MainLayout'
  import Loading from 'vue-loading-overlay'
  import 'vue-loading-overlay/dist/vue-loading.css'
  export default {
    components: {
      MainLayout, Loading
    },
    computed: {
      ...mapState(['loading']),
    }
  }
</script>

<style lang="stylus">
#app
    padding 60px 0
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #ffffff
    background-color #15202b
</style>
