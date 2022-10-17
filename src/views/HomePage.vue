<template>
  <div class="home-page">
    <HomeHero :data="$options.hero" />
    <BrainSkills :data="$options.skills" />
    <ProjectsList :data="$options.projects" />
  </div>
</template>

<script>
import HomeHero from '@/components/hero/HomeHero.vue'
import BrainSkills from '@/components/skills/BrainSkills.vue'
import ProjectsList from '@/components/projects/ProjectsList.vue'

import { hero, skills, projects } from '@/assets/data/en.json'

export default {
    name: "HomePage",
    components: { HomeHero, BrainSkills, ProjectsList },
    hero, skills, projects
}
</script>

<style lang="scss">
    .home-page {
      
    }
</style>