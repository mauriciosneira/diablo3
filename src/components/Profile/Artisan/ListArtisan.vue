<template>
  <div class="artisan-list">
    <hr class="bg-light my-5">
    <h3 class="font-diablo mb-4">Artisans</h3>
    <b-row>
      <b-col lg="4" v-for="artisan in getArtisanInfo(artisans)" :key="artisan.name">
        <item-artisan v-if="artisan.normal" :artisan="artisan"></item-artisan>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import ItemArtisan from './ItemArtisan'
import {mapGetters} from 'vuex'

export default {
  components: { ItemArtisan },
  props: {
    artisans: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters('profile', ['getArtisanInfo'])
    }
}
</script>