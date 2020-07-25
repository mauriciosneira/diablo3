<template>
  <div class="d-flex align-items-center mb-3">
    <div class="mr-2">
      <img :src="getSkillImg(skill)" :alt="skill.name">
    </div>

    <div>
      <p class="skill-name m-0" :title="skill.description">
        {{ skill.name }}
      </p>
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
    }
  },
  computed: {
    ...mapGetters('hero',['getSkillImg']),
  }
}
</script>