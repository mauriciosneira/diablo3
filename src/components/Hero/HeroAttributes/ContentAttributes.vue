<template>
  <div class="h-attriubutes">
    <h2 class="font-diablo">Attributes</h2>

    <hr class="bg-white">
    <div class="attributes">
      <div class="core">
        <HeroAttributeList :attributes="getCoreAttributes(attributes)"/>
      </div>

      <hr>
      <div class="secondary">
        <HeroAttributeList :attributes="getSecondaryAttributes(attributes)"/>
      </div>

    </div>

    <hr>
    <div class="resources">
      <HeroResources :resources="resources"/>
    </div>

  </div>
</template>

<script>
import HeroAttributeList from './List'
import HeroResources from './Resources'
import {mapState, mapGetters} from 'vuex'

export default {
  components: { HeroResources, HeroAttributeList },
  props: {
    attributes: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState('hero', ['coreAttributes']),
    ...mapGetters('hero', ['getCoreAttributes', 'getSecondaryAttributes']),
    resources () {
        const resources = ['life', 'primaryResource', 'secondaryResource']
        const data = {
            classSlug: this.attributes.classSlug,
            resources: {}
        }
        resources.forEach(item => {
            data.resources[item] = { name: item, val: this.attributes[item] }
      })
      return data
    }
  }
}
</script>
