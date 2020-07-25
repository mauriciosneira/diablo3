<template>
  <div class="d-flex align-items-center mb-3">
    <div class="mr-2">
      <span class="slot" :class="slotClass"/>
      <img :src="getSkillImg(skill)" :alt="skill.name">
    </div>

    <div>
      <p class="skill-name m-0" :title="skill.description">
        {{ skill.name }}
      </p>
      <small v-if="rune" class="rune-name text-muted" :title="rune.description">
        {{ rune.name }}
      </small>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    skill: {
      required: true,
      type: Object
    },
    rune: {
      required: false,
      type: Object
    },
    slotNum: {
      required: true,
      type: Number || String
    }
  },
  computed: {
    ...mapGetters('hero',['getSkillImg']),
    slotClass () {
        return `slot-${this.slotNum}`
    }
  }
}
</script>