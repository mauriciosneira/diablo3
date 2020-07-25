<template>
  <img :src="getItemImg(gem.item, 'small')" :alt="gem.item.name" :title="gem.item.name">
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  props: {
    gem: {
      required: true,
      type: Object
    }
  },
  computed: {
    ...mapGetters('hero', ['getItemImg']),
  }
}
</script>