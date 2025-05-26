<template>
  <BaseContainer id="skills" :title="data.title" ref="skillsSection">
    <div class="brain-skills__container">
      <div class="brain">
        <div class="brain-skills">
          <BrainPart
            class="left-part floating"
            :skills="leftSkills"
            @select-skill="handleSkill"
          />
          <transition name="fade-in" mode="out-in">
            <div
              class="brain-skills__info"
              v-if="selectedSkill"
              :key="selectedSkill.name"
            >
              <font-awesome-icon
                v-if="selectedSkill.icon"
                :icon="selectedSkill.icon"
              />
              <b>{{ selectedSkill.name }}</b>
              <p>{{ selectedSkill.experience }}</p>
            </div>
          </transition>

          <BrainPart
            class="right-part floating"
            side="right"
            :skills="rightSkills"
            @select-skill="handleSkill"
          />
        </div>
      </div>
    </div>
  </BaseContainer>
</template>

<script>
import BrainPart from "./BrainPart.vue";
import { skills } from "@/assets/data/skills.json";

export default {
  name: "BrainSkills",
  skills,
  components: {
    BrainPart,
  },
  data() {
    return {
      selectedSkill: null,
      observer: null,
    };
  },
  props: {
    data: { type: Object, default: () => {} },
  },
  computed: {
    leftSkills() {
      return this.buildBrainPart(this.data.left);
    },
    rightSkills() {
      return this.buildBrainPart(this.data.right);
    },
  },
  methods: {
    buildBrainPart(arr) {
      return arr.map((skill) => this.$options.skills[skill]);
    },
    handleSkill(skill) {
      this.selectedSkill = skill;
    },
    // resetSelectedSkill() {
    //   this.selectedSkill = null;
    // },
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
      .right-part {
        animation-delay: 0.4s !important;
      }
      .brain-skills__info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        svg {
          font-size: 36px;
        }
        b {
          margin: 12px 0;
        }
        p {
          max-width: 260px;
          text-align: center;
          line-height: 24px;
        }
      }
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
@media only screen and (max-width: 800px) {
  .base-container {
    display: block !important;
  }
}
</style>
