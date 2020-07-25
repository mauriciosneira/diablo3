<template>
  <div class="grid-container">
    <div class="grid-item item-left">
       <top-list-heroes v-if="hasHeroes" :heroes="getTopHeroes"></top-list-heroes>
       <list-heroes v-if="hasHeroes" :heroes="getRestHeroes"></list-heroes>
       <list-progress v-if="hasHeroes" :acts="profileData.progression"></list-progress>
    </div>
    <div class="grid-item item-right">
      <player-stats v-if="hasHeroes" :stats="getStart"></player-stats>
    </div>
  </div>
</template>

<script>
import TopListHeroes from '@/components/Profile/Top/TopListHeroes'
import ListHeroes from '@/components/Profile/List/ListHeroes'
import ListProgress from '@/components/Profile/Progress/ListProgress'
import PlayerStats from '@/components/Profile/PlayerStats/ContentPlayer'
import {mapGetters, mapState} from 'vuex'

export default {
    components: {
        TopListHeroes, ListHeroes, ListProgress, PlayerStats
    },
    props: {
        profileData: {
            type: Object,
            required: true
        }
    },
    computed: {
        ...mapGetters('profile', ['getTopHeroes', 'getRestHeroes', 'hasHeroes', 'getStart']),
    }
}
</script>

<style lang="stylus">
    .grid-container
        display grid
        grid-template-columns 1fr

        .grid-item
            &.item-left
                grid-column span 1

            &.item-right    
                grid-column span 1

    @media (min-width: 992px)
        .grid-container
            display grid
            grid-template-columns repeat(6, 1fr)

            .grid-item
                &.item-left
                    grid-column span 4

                &.item-right
                    grid-column span 2
</style>