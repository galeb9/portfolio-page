<template>
  <BaseContainer class="home-hero" :minHeight="100">
    <div class="home-hero__column">
      <BaseHeading
        animation="typewriter"
        :text="data.title"
        element="h1"
        margin="0 0 18px"
      />
      <BaseText class="home-hero__text" :text="data.text" :moreLines="true" />
    </div>
    <div class="home-hero__column column--svg">
      <img
        v-if="data.img"
        class="home-hero__svg non-select"
        :src="require('@/assets/images/' + data.img)"
        alt="Home hero image"
      />
    </div>
  </BaseContainer>
</template>

<script>
export default {
  name: "HomeHero",
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
  gap: 30px;
  .home-hero__column {
    flex: 1;
    .home-hero__text {
      padding-left: 10px;
    }
  }
  .column--svg {
    display: flex;
    justify-content: flex-end;
  }
  .home-hero__svg {
    max-width: 400px;
    width: 100%;
    border-radius: 50%;
    opacity: 0.9;
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
    gap: 50px;
    .home-hero__column {
      flex: none;
    }
  }
}
</style>
