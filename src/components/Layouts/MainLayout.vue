<template>
  <div class="container">
    <header-bar></header-bar>

    <router-view/>

    <footer-bar></footer-bar>
  </div>
</template>

<script>
import HeaderBar from '@/components/Layouts/HeaderBar/'
import FooterBar from '@/components/Layouts/FooterBar'

export default {
  name: 'MainLayout',
  components: {
    HeaderBar,
    FooterBar
  }
}
</script>