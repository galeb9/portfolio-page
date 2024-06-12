<template>
  <div class="home-page">
    <HomeHero :data="$options.hero" />
    <BrainSkills :data="$options.skills" />
    <ProjectsList :data="$options.projects" />
    <TheContact :data="$options.contact" />
  </div>
</template>

<script>
import { hero, skills, projects, contact } from "@/assets/data/en.json";
import scrollToTop from "@/mixins/scrollToTop";
import HomeHero from "@/components/hero/HomeHero.vue";
import BrainSkills from "@/components/skills/BrainSkills.vue";
import ProjectsList from "@/components/projects/ProjectsList.vue";
import TheContact from "@/components/contact/TheContact.vue";

export default {
  name: "HomePage",
  mixins: [scrollToTop],
  components: { HomeHero, BrainSkills, ProjectsList, TheContact },
  hero,
  skills,
  projects,
  contact,
};
</script>
