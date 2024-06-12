<template>
  <BrainSkills :data="$options.skills" />
</template>

<script>
import BrainSkills from "@/components/skills/BrainSkills.vue";
import { skills } from "@/assets/data/en.json";
import scrollToTop from "@/mixins/scrollToTop";

export default {
  name: "SkillsPage",
  mixins: [scrollToTop],
  components: { BrainSkills },
  skills,
};
</script>
