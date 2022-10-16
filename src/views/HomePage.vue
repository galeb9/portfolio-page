<template>
  <div class="home-page">
    <HomeHero :data="$options.hero" />
    <BrainSkills :data="$options.skills" />
  </div>
</template>

<script>
import HomeHero from '@/components/hero/HomeHero.vue'
import BrainSkills from '@/components/skills/BrainSkills.vue'

import { hero, skills } from '@/assets/data/en.json'

export default {
    name: "HomePage",
    components: { HomeHero, BrainSkills },
    hero, skills
}
</script>

<style lang="scss">
    .home-page {
      
    }
</style>