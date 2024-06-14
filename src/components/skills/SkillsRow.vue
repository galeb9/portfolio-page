<template>
  <div
    :class="['skills-row', { 'skills-row--column': isColumn }]"
    v-if="skills.length"
  >
    <SkillItem
      v-for="(skill, index) of choosenSkills"
      :key="index"
      :item="skill"
      :hasPointerLine="false"
      @mouseenter="showLabel(skill.name)"
      @mouseleave="hideLabel"
    />

    <transition name="fade-in" mode="out-in">
      <div class="active-label" v-if="hasShowLabel && currentLabel">
        {{ currentLabel }}
      </div>
    </transition>
  </div>
</template>

<script>
import SkillItem from "@/components/skills//SkillItem.vue";
import { skills } from "@/assets/data/skills.json";

export default {
  name: "SkillRow",
  components: { SkillItem },
  skills,
  props: {
    skills: { type: Array, default: () => [] },
    isColumn: { type: Boolean, default: false },
    hasShowLabel: { type: Boolean, default: false },
  },
  data() {
    return {
      currentLabel: null,
    };
  },
  computed: {
    choosenSkills() {
      return this.getSkills(this.skills);
    },
  },
  methods: {
    getSkills(arr) {
      return arr.reduce((acc, item) => {
        const skill = this.$options.skills[item.toLowerCase()];

        if (skill) {
          acc.push(skill);
        }

        return acc;
      }, []);
    },
    showLabel(label) {
      this.currentLabel = label;
    },
    hideLabel() {
      this.currentLabel = null;
    },
  },
};
</script>

<style lang="scss">
.skills-row {
  display: flex;
  align-items: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
  .active-label {
    color: $secondary;
    font-weight: 700;
    letter-spacing: 2px;
  }
}
.skills-row--column {
  flex-direction: column;
}
</style>
