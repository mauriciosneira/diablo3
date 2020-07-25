<template>
  <div class="skills-wrapper mt-5">
    <h2 class="font-diablo">Skills</h2>
    <hr class="bg-white">
    <b-nav pills small>
      <b-nav-item :active="!isPassiveSkillsActive" @click="changeComponent('ListActive')">Active</b-nav-item>
      <b-nav-item :active="isPassiveSkillsActive" @click="changeComponent('ListPassive')">Passive</b-nav-item>
    </b-nav>

    <keep-alive>
      <component :is="activeComponent" :skills="componentProps"/>
    </keep-alive>

    <!--
      <list-active :skills="skills.active"></list-active>
      <hr>
      <list-passive :skills="skills.passive"></list-passive>
    -->
  </div>
</template>

<script>
// import ListActive from './ListActive'
// import ListPassive from './ListPassive'

export default {
  components: {
    ListActive: () => import(/* webpackChunkName: "ListActive" */'./ListActive'),
    ListPassive: () => import(/* webpackChunkName: "ListPassive" */'./ListPassive')
  },
  data () {
    return {
      activeComponent: 'ListActive'
    }
  },
  props: {
    skills: {
      required: true,
      type: Object
    }
  },
  methods: {
    changeComponent (component) {
      this.activeComponent = component
    }
  },
  computed: {
    componentProps () {
      return this.activeComponent === 'ListActive' ? this.skills.active : this.skills.passive
    },
    isPassiveSkillsActive () {
      return this.activeComponent === 'ListPassive'
    }
  }
}
</script>