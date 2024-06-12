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
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroImage",
  props: {
    img: { type: String },
  },
};
</script>

<style lang="scss">
.hero-image {
  &__container {
    position: relative;
    margin-right: 20px;
    width: max-content;
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
