<template>
  <div
    class="skill-item noisy"
    ref="skillItem"
    @mouseenter="changeColor"
    @mouseleave="changeColorBack"
  >
    <div class="skill-item__icon-container">
      <font-awesome-icon
        v-if="item.icon"
        :icon="['fab', item.icon]"
        class="skill-item__icon"
      />
      <p v-if="item.text" class="skill-item__text-icon">{{ item.text }}</p>
      <img
        v-if="item.img"
        :class="[
          'skill-item__img',
          { mongoose__img: item.img === 'mongoose.png' },
        ]"
        :src="require('@/assets/images/skills/' + item.img)"
        ref="skillImage"
        alt="Skill image"
      />
    </div>
    <div :class="['skill-item__pointer', side]">
      <p class="skill-item__pointer-text">{{ item.name || "name" }}</p>
      <div class="skill-item__pointer-line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillItem",
  props: {
    item: { type: Object, default: () => {} },
    side: { type: String, default: "left" },
  },
  data() {
    return {};
  },
  methods: {
    changeColor() {
      if (this.$refs.skillItem)
        this.$refs.skillItem.style.background = `linear-gradient( ${this.item.color} , transparent   120% )`;

      if (this.$refs.skillImage) {
        this.$refs.skillImage.style.filter = "invert(100%)";
        this.$refs.skillImage.style.filter = "invert(100%)";
      }
    },
    changeColorBack() {
      if (this.$refs.skillItem)
        this.$refs.skillItem.style.background = `linear-gradient( #dee2e6 ,  transparent 120% ), url(https://grainy-gradients.vercel.app/noise.svg)`;

      if (this.$refs.skillImage) this.$refs.skillImage.style.filter = "none";
    },
  },
};
</script>

<style lang="scss">
.skill-item {
  user-select: none;
  border-radius: $radius;
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  cursor: pointer;
  z-index: 10;
  color: $darkText;
  transition: $transition;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: relative;

  &:hover .skill-item__icon,
  &:hover .skill-item__text-icon {
    color: white;
  }
  .skill-item__icon-container {
    .skill-item__text-icon {
      font-weight: 700;
      letter-spacing: 1.5px;
      font-size: 14px;
      transition: $transition;
    }
    .skill-item__icon {
      font-size: 22px;
      transition: $transition;
    }
    .skill-item__img {
      max-height: 20px;
      transition: $transition;
    }
    .mongoose__img {
      max-height: 15px;
    }
  }
  .skill-item__pointer {
    position: absolute;
    top: 2px;
    .skill-item__pointer-text {
      padding: 0 6px 2px;
      font-weight: 700;
    }
    .skill-item__pointer-line {
      transition: $transition;
      width: 190px;
      height: 2px;
      background: rgba(5, 5, 5, 0.521);
    }
  }

  // skill item pointer side
  .left {
    right: 50px;
  }
  .right {
    left: 50px;
    text-align: right;
  }

  @media only screen and (min-width: 801px) {
    &:hover {
      .skill-item__pointer {
        .skill-item__pointer-text {
          color: $secondary !important;
        }
        .skill-item__pointer-line {
          width: 230px;
          background: $secondary !important;
        }
      }
    }
  }
  @media only screen and (max-width: 800px) {
    &:hover {
      .skill-item__pointer {
        .skill-item__pointer-text {
          font-size: 16px;
          color: $secondary;
        }
        .skill-item__pointer-line {
          width: 50vw;
          background: $secondary;
        }
      }
    }
    .skill-item__pointer {
      .skill-item__pointer-text {
        font-size: 14px;
      }
      .skill-item__pointer-line {
        width: calc(100vw - 300px);
      }
    }
  }
  @media only screen and (max-width: 520px) {
    .skill-item__pointer .skill-item__pointer-line {
      width: calc(100vw - 220px);
    }
  }
  @media only screen and (max-width: 355px) {
    .skill-item__pointer .skill-item__pointer-line {
      width: calc(100vw - 180px);
    }
  }
}
</style>
