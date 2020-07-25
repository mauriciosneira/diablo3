<template>
  <div class="hero-view">
    <hero-top v-if="hero" :detail="detailHeader"></hero-top>
    <b-row>
      <b-col md="12" lg="8" order-lg="2">
        <content-items :items="items"></content-items>
      </b-col>

      <b-col md="12" lg="4" order-lg="1">
        <template v-if="hero">
          <content-attributes :attributes="detailStats"></content-attributes>
          <content-skills :skills="hero.skills"></content-skills>
          
        </template>
      </b-col>
    </b-row>

  </div>
</template>

<script>
import HeroTop from '@/components/Hero/HeroTop'
import ContentAttributes from '@/components/Hero/HeroAttributes/ContentAttributes'
import ContentSkills from '@/components/Hero/HeroSkills/ContentSkills'
import ContentItems from '@/components/Hero/HeroItems/ContentItems'
import {mapActions, mapState} from 'vuex'

export default {
  name: 'Hero',
  components: {
    HeroTop, ContentAttributes, ContentSkills, ContentItems
  },
  mounted () {
      this.getHero(this.$route.params)
      this.getDetailedHeroItems(this.$route.params)
  },
  methods: {
    ...mapActions('hero', ['getHero', 'getDetailedHeroItems']),
  },
  computed: {
    ...mapState('hero', ['hero', 'items']),
    detailHeader () {
      const {
        name,
        class: classSlug,
        gender,
        level,
        hardcore,
        seasonal,
        paragonLevel,
        alive,
        seasonCreated
      } = this.hero

      return {
        name,
        classSlug,
        gender,
        level,
        hardcore,
        seasonal,
        paragonLevel,
        alive,
        seasonCreated
      }
    },
    detailStats () {
      return { ...this.hero.stats, classSlug: this.hero.class }
    }
  }
}
</script>