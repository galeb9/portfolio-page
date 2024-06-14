<template>
  <div :class="['brain-part', side + '-side']">
    <div class="brain-part__skill-container">
      <div class="brain-part__skill-single">
        <SkillItem :side="side" :item="skills[0]" />
      </div>
      <div class="brain-part__skills">
        <SkillItem
          v-for="(item, index) of correctData(skillsArray)"
          :key="index + 'A'"
          :item="item"
          :side="side"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SkillItem from "./SkillItem.vue";
export default {
  name: "BrainPart",
  components: {
    SkillItem,
  },
  data() {
    return {
      skillsArray: [],
    };
  },
  props: {
    side: { type: String, default: "left" },
    skills: { type: Array, default: () => [] },
  },
  methods: {
    correctData(arr) {
      arr = [...this.skills];
      arr.shift();
      return arr;
    },
  },
  created() {
    this.correctData();
  },
};
</script>

<style lang="scss">
$brainShadow: 12px 10px 15px -11px #c29fb7;
$brainColor: rgb(56, 130, 133);
$brainColor: #b486a6;
$brainShadow: #854270;
$brainOvalsOffsetX: -55px;
$brainOvalsOffsetY: 55px;

.brain-part {
  width: 150px;
  height: 400px;
  background: $brainColor;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:after,
  &:before {
    content: "";
    position: absolute;
    background: $brainColor;
    width: 180px;
    height: 180px;
    border-radius: 100px;
  }
  &:after {
    top: $brainOvalsOffsetY;
  }
  &:before {
    bottom: $brainOvalsOffsetY;
  }

  &__skill-container {
    position: relative;
    z-index: 1;
    .brain-part__skills {
      padding: 14px;
      display: flex;
      flex-wrap: wrap;
      gap: 20px 10px;
    }
    .brain-part__skill-single {
      display: flex;
      margin-bottom: 8px;
    }
  }
  @media only screen and (max-width: 355px) {
    transform: scale(0.9);
  }
}

// for left/right
.left-side {
  box-shadow: inset 12px 0px 15px -4px $brainShadow,
    inset -8px 0px 15px -4px $brainShadow;
  border-radius: 120px 60px 60px 120px;
  &:after,
  &:before {
    left: $brainOvalsOffsetX;
    box-shadow: inset 12px 10px 15px -11px $brainShadow;
  }
  &:after {
    transform: rotate(-15deg);
  }
  .brain-part__skill-container {
    transform: translateX(-8px);
    .brain-part__skill-single {
      padding: 0 26px;
      justify-content: flex-end;
    }
    .brain-part__skills {
      .skill-item:nth-child(1n) {
        transform: translateY(-35px);
      }
      .skill-item:nth-child(2n) {
        transform: translateY(0px);
      }
    }
  }
}
.right-side {
  box-shadow: inset -12px 0px 15px -4px $brainShadow,
    inset 8px 0px 15px -4px $brainShadow;
  border-radius: 60px 120px 120px 60px;
  &:after,
  &:before {
    right: $brainOvalsOffsetX;
    box-shadow: inset -12px 10px 15px -11px $brainShadow;
  }
  &:after {
    transform: rotate(15deg);
  }
  .brain-part__skill-container {
    transform: translateX(20px);
    .brain-part__skill-single {
      padding: 0 14px;
      justify-content: flex-start;
    }
    .brain-part__skills {
      .skill-item:nth-child(1n) {
        transform: translateY(0px);
      }
      .skill-item:nth-child(2n) {
        transform: translateY(-35px);
      }
    }
  }
}
</style>
