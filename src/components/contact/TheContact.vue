<template>
  <BaseContainer id="contact" :title="data.title">
    <div class="contact__container">
      <div class="contact__icon">
        <div
          :class="['contact__icon-plane', { 'move__plane-icon': movePlane }]"
        >
          <img
            class="contact__icon-plane-img plane--dark"
            :src="require('@/assets/images/plane.png')"
            alt="Plane image"
          />
        </div>

        <div class="contact__icon-hands">
          <img
            class="contact__icon-hands-img"
            :src="require('@/assets/images/hands-colored.png')"
            alt="Hands image"
          />
        </div>
      </div>
      <div class="contact__btns">
        <BaseButton
          tag="a"
          link="/files/m_grimsic_cv_eng.pdf"
          target="_blank"
          download
        >
          <font-awesome-icon :icon="['fas', 'circle-down']" />
          CV
        </BaseButton>
        <BaseButton
          @click="openMailClient"
          tag="a"
          link="mailto:matej.grimsic@gmail.com"
        >
          <font-awesome-icon
            class="download-icon"
            :icon="['fas', 'envelope']"
          />
          {{ data.btn }}
        </BaseButton>
      </div>

      <div class="contact__or-message">
        <BaseText :text="data.or" />
        <font-awesome-icon :icon="['fa', 'arrow-down-long']" />
      </div>
      <div class="contact__copy-email" @click="copyText(data.email)">
        <p>{{ data.email }}</p>
        <font-awesome-icon class="copy-icon" :icon="['far', 'clone']" />
      </div>
      <div class="copied-notification__container">
        <transition name="fade-in-from-bottom">
          <p v-show="isCopied" class="notification--copied">
            Email copied to clipboard
          </p>
        </transition>
      </div>
    </div>
  </BaseContainer>
</template>

<script>
export default {
  name: "TheContact",
  props: {
    data: { type: Object, default: () => {} },
  },
  data() {
    return {
      isCopied: false,
      movePlane: false,
    };
  },
  methods: {
    openMailClient() {
      this.movePlane = true;
    },
    async copyText(text) {
      this.isCopied = true;
      this.movePlane = true;
      setTimeout(() => (this.isCopied = false), 4000);
      return await navigator.clipboard.writeText(text);
    },
  },
};
</script>

<style lang="scss">
.contact__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  .contact__icon {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    &-plane {
      padding: 20px;
      background: $secondary;
      width: max-content;
      transform: translateY(30px);
      border: 2px solid $blue;
      border-radius: 50%;
      background: radial-gradient($primary, transparent 120%),
        url(https://grainy-gradients.vercel.app/noise.svg) !important;
      filter: contrast(100%) brightness(100%);

      &-img {
        max-width: 50px;
      }
      @media only screen and (max-width: 768px) {
        transform: translateY(0px);
      }
    }
    .move__plane-icon {
      transform: translateY(100%);
      transition: transform 1s ease-in-out;
    }
  }
  .contact__btns {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap-reverse;
    gap: 40px;
  }
  .contact__or-message {
    display: flex;
    flex-direction: column;
    gap: 10px;
    p {
      font-size: 14px;
    }
  }
  .contact__copy-email {
    font-size: 18px;
    font-weight: 700;
    display: flex;
    gap: 8px;
    transition: $transition;
    cursor: pointer;
    &:hover {
      color: $secondary;
    }
  }
  .copied-notification__container {
    min-height: 30px;
    .notification--copied {
      text-align: center;
      text-shadow: none;
    }
  }
}
</style>
