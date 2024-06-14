<template>
  <TheHeader />
  <div class="app-container">
    <RouterView class="router-view" v-slot="{ Component }">
      <transition name="fade-in" mode="out-in">
        <component class="active-component" :is="Component" />
      </transition>
    </RouterView>
    <DarkModeSwitcher />
    <TheFooter :data="$options.footer" />
  </div>
</template>

<script>
import { footer } from "@/assets/data/en.json";

import TheHeader from "@/components/header/TheHeader.vue";
import TheFooter from "@/components/footer/TheFooter.vue";
import DarkModeSwitcher from "@/components/UI/DarkModeSwitcher.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    DarkModeSwitcher,
    TheFooter,
  },
  footer,
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
html {
  scroll-behavior: smooth;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: $bgLight;
  color: $darkText;

  .display-on-desktop {
    display: inherit;
  }
  .display-on-mobile {
    display: none;
  }
  // mobile
  @media only screen and (max-width: 768px) {
    .display-on-desktop {
      display: none;
    }
    .display-on-mobile {
      display: block;
    }
  }
}

.app-container {
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 40px;
  @media only screen and (max-width: 768px) {
    padding: 0 20px; // app padding at sides
  }
}

// move to main.scss aka global.scss
// base classes
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
img {
  max-width: 100%;
  height: auto;
}

a:link,
a:visited {
  text-decoration: none;
  border-bottom: none;
  color: inherit;
}
.border-top {
  border-top: 2px solid $secondary;
}
.border-bottom {
  padding-bottom: 8px;
  border-bottom: 2px solid $secondary;
}

.pointer {
  cursor: pointer;
}
.non-select {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
.glass-bg {
  background: rgba($color: black, $alpha: 0.54);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  margin-bottom: 10px;
  color: $lightText;
  box-shadow: $shadow2;
}
// used on skill items
.noisy {
  background: linear-gradient($primary, transparent 120%),
    url(https://grainy-gradients.vercel.app/noise.svg);
  filter: contrast(100%) brightness(100%);
}

::-webkit-scrollbar {
  width: 10px;
  height: 8px;
  background: $bgDark;
}
::-webkit-scrollbar-thumb {
  background: rgba(59, 206, 172, 0.678);
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 206, 172, 0.808);
}

// custom margins
.mb-20 {
  margin-bottom: 20px;
}
.mt-40 {
  margin-top: 40px;
}
</style>
