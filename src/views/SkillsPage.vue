<template>
  <BrainSkills :data="$options.skills" />
</template>

<script>
import BrainSkills from "@/components/skills/BrainSkills.vue";
import { skills } from "@/assets/data/en.json";

export default {
  name: "SkillsPage",
  components: { BrainSkills },
  skills,
};
</script>
