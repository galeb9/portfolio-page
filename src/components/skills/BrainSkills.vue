<template>
  <BaseContainer class="brain-skills__container">
    <BaseHeading :text="data.title" element="h2" />
    <div class="brain">
      <div class="brain-skills">
        <BrainPart class="left-part" :skills="data.left" />
        <BrainPart class="right-part" side="right" :skills="data.right" />
      </div>
    </div>
  </BaseContainer>
</template>

<script>
import BrainPart from "./BrainPart.vue";

export default {
  name: "BrainSkills",
  components: {
    BrainPart,
  },
  props: {
    data: { type: Object, default: () => {} },
  },
};
</script>

<style lang="scss">
.brain-skills__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  .brain {
    width: 100%;
    padding: 0 80px;
    .brain-skills {
      min-width: 240px;
      width: max-content;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      gap: 30px;
    }
  }
  @media only screen and (max-width: 800px) {
    gap: 30px;
    justify-content: flex-start;
    padding-bottom: 80px;
    .brain {
      justify-content: center;
      align-items: flex-start;
      padding: 0 50px;
      .brain-skills {
        margin: 0;
        flex-direction: column;
        gap: 50px;
        width: 100%;
        .left-part {
          align-self: flex-end;
        }
      }
    }
  }
  @media only screen and (max-width: 520px) {
    .brain {
      padding: 0px;
      .brain-skills {
        gap: 0px;
      }
    }
  }
}
</style>
