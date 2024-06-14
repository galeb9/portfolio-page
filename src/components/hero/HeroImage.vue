<template>
  <div class="hero-image">
    <div class="hero-image__container">
      <img
        class="non-select"
        :src="require('@/assets/images/' + img)"
        alt="Home hero image"
      />
      <div class="tag xp-tag">Experience: 2 years</div>
      <div class="tag name-tag">Matej Grimšič</div>
      <SkillsRow class="hero-skills" :skills="skills" :isColumn="true" />
    </div>
  </div>
</template>

<script>
import SkillsRow from "@/components/skills/SkillsRow.vue";

export default {
  name: "HeroImage",
  components: { SkillsRow },
  props: {
    img: { type: String },
    skills: { type: Array, default: () => [] },
  },
};
</script>

<style lang="scss">
.hero-image {
  &__container {
    position: relative;
    margin-right: 20px;
    width: max-content;
    .hero-skills {
      position: absolute;
      bottom: 25px;
      left: 20px;
    }
    .tag {
      padding: 12px 30px;
      border-radius: $radius;
      background: $secondary;
      transition: $transition;
      color: $lightText;
      letter-spacing: 3px;
      width: max-content;
      position: absolute;
    }
    .xp-tag {
      top: 30px;
      transform: translateX(-40px);
    }
    .name-tag {
      bottom: 30px;
      right: 0;
      transform: translateX(40px);
    }
    img {
      min-width: 200px;
      max-width: 400px;
      width: 100%;
      border-radius: $radius;
      border-radius: 10%;
      border: 4px solid $secondary;
      box-shadow: $shadow3;
    }
    @media only screen and (max-width: 768px) {
      margin-right: 0px;
      &__img {
        max-width: 250px;
        min-width: 100px;
      }
      .tag {
        font-size: 12px;
        padding: 12px 20px;
      }
      .xp-tag,
      .name-tag {
        transform: translateX(0px);
      }
    }
  }
}
</style>
