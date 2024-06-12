<template>
  <BaseContainer>
    <div class="home-hero">
      <div class="home-hero__column">
        <BaseHeading
          animation="typewriter"
          :text="data.title"
          element="h1"
          margin="0 0 18px"
        />
        <BaseText class="home-hero__text" :text="data.text" :moreLines="true" />
        <div class="home-hero__btns">
          <BaseButton tag="a" link="#contact">Get in touch</BaseButton>
          <BaseSocialIcons :links="data.links" :iconsOnly="true" />
        </div>
      </div>
      <HeroImage :img="data.img" class="home-hero__column img-flex-end" />
    </div>
    <ScrollDownMouse />
  </BaseContainer>
</template>

<script>
import BaseSocialIcons from "@/components/UI/BaseSocialIcons.vue";
import HeroImage from "@/components/hero/HeroImage.vue";
import ScrollDownMouse from "@/components/UI/ScrollDownMouse.vue";

export default {
  name: "HomeHero",
  components: { BaseSocialIcons, HeroImage, ScrollDownMouse },
  props: {
    data: { type: Object, default: () => {} },
  },
};
</script>

<style lang="scss">
.home-hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  &__column {
    width: 50%;
  }
  &__text {
    padding-left: 12px;
    padding-bottom: 30px;
  }
  &__btns {
    display: flex;
    flex-wrap: wrap-reverse;
    gap: 30px;
  }
  .img-flex-end {
    display: flex;
    justify-content: flex-end;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
    gap: 30px;
    &__column {
      width: 90%;
    }

    &__btns {
      align-items: center;
      flex-direction: column-reverse;
      gap: 20px;
    }
    .img-flex-end {
      justify-content: center;
    }
  }
}
</style>
