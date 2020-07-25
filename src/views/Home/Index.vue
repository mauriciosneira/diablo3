<template>
  <div class="home">
    <home-title></home-title>
    <home-form></home-form>
  </div>
</template>

<script>
import HomeTitle from './HomeTitle'
import HomeForm from './HomeForm'
export default {
  name: 'Home',
  components: {
    HomeTitle, HomeForm
  }
}
</script>
