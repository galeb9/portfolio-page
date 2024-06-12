<template>
  <div class="dark-mode-switcher non-select" @click="toggleDarkMode">
    <font-awesome-icon :icon="['fa', 'circle-half-stroke']" />
  </div>
</template>

<script>
export default {
  name: "DarkModeSwitcher",
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    initializeDarkMode() {
      if (localStorage.getItem("darkModeOn") === "true") {
        this.toggleDarkMode();
      }
    },
    toggleDarkMode() {
      const app = document.querySelector("#app").classList;
      this.isDarkMode ? app.remove("dark-mode") : app.add("dark-mode");
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem("darkModeOn", this.isDarkMode);
    },
  },
  created() {
    this.initializeDarkMode();
  },
};
</script>

<style lang="scss">
.dark-mode-switcher {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 11;
  cursor: pointer;
  svg {
    transition: $transition;
    font-size: 36px;
    color: $secondary;
    &:hover {
      color: $lightText;
    }
  }
}

#app.dark-mode {
  transition: all 0.2s ease-in;
  background: $bgDark;
  color: $lightText;

  .dark-mode-switcher svg:hover {
    color: $secondary;
  }
  // skills
  .skill-item__pointer {
    .skill-item__pointer-text {
      color: $darkText;
      color: $lightText;
    }
    .skill-item__pointer-line {
      background: $primary;
    }
  }
  // scrollbar
  ::-webkit-scrollbar {
    background: $bgDark;
  }

  .carousel__pagination-button:not(.carousel__pagination-button--active)::after {
    background: $lightText;
    opacity: 0.6;
  }

  // mobile
  @media only screen and (max-width: 768px) {
    // nav
    .navigation .nav--mobile {
      background: $bgDark;
    }
    .hamburger__icon {
      color: $lightText;
    }
  }
}
</style>
