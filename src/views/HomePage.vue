<template>
  <div class="home-page">
    <HomeHero :data="$options.hero" />
    <BrainSkills :data="$options.skills" />
    <ProjectsList :data="$options.projects" />
    <TheContact :data="$options.contact" />
  </div>
</template>

<script>
import HomeHero from '@/components/hero/HomeHero.vue'
import BrainSkills from '@/components/skills/BrainSkills.vue'
import ProjectsList from '@/components/projects/ProjectsList.vue'
import TheContact from '@/components/contact/TheContact.vue'

import { hero, skills, projects, contact } from '@/assets/data/en.json'

export default {
    name: "HomePage",
    components: { HomeHero, BrainSkills, ProjectsList, TheContact },
    hero, skills, projects, contact,
    mounted() {
      window.scrollTo(0, 0)
    },
    methods: {
      scrollTop () {
        document.querySelector(".home-page").scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      }
    }
}
</script>

<style lang="scss">
    .home-page {
      
    }
</style>