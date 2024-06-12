<template>
  <div class="navigation">
    <BaseLogo />
    <!-- desktop -->
    <nav class="display-on-desktop">
      <router-link
        v-for="(link, index) in navLinks"
        :key="index"
        :to="'/' + link.path"
        class="navigation__link"
      >
        {{ link.text }}
      </router-link>
      <BuyMeCoffeeBtn />
    </nav>

    <!-- mobile -->
    <font-awesome-icon
      class="hamburger__icon pointer display-on-mobile"
      @click="toggleMenu"
      :icon="hamburgerActive ? ['fa', 'xmark'] : ['fa', 'bars']"
    />
    <Transition name="move-from-bottom">
      <nav v-if="hamburgerActive" class="nav--mobile">
        <router-link
          v-for="(link, index) in navLinks"
          :key="index"
          :to="'/' + link.path"
          class="navigation__link"
          @click="toggleMenu"
        >
          {{ link.text }}
        </router-link>
        <BuyMeCoffeeBtn />
        <BaseSocialIcons :links="links" iconsOnly />
      </nav>
    </Transition>
  </div>
</template>

<script>
import BaseLogo from "@/components/UI/BaseLogo.vue";
import BuyMeCoffeeBtn from "@/components/UI/BuyMeCoffeeBtn.vue";
import BaseSocialIcons from "@/components/UI/BaseSocialIcons.vue";

export default {
  name: "TheNavigation",
  components: {
    BuyMeCoffeeBtn,
    BaseLogo,
    BaseSocialIcons,
  },
  data() {
    return {
      hamburgerActive: false,
      navLinks: [
        { text: "Home", path: "" },
        { text: "Skills", path: "skills" },
        { text: "Projects", path: "projects" },
      ],
      links: [
        {
          text: "Github",
          link: "https://github.com/galeb9",
          icon: { prefix: "fab", name: "github" },
        },
        {
          text: "Linkedin",
          link: "https://www.linkedin.com/in/matej-grimsic/",
          icon: { prefix: "fab", name: "linkedin" },
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.hamburgerActive = !this.hamburgerActive;
      document.body.style.overflowY = this.hamburgerActive ? "hidden" : "auto";
    },
    closeMenu() {
      this.hamburgerActive = false;
    },
  },
};
</script>

<style lang="scss">
$headerHeight: 55px;
$bottomMargin: 10px;
.navigation {
  max-width: 1280px;
  margin: 0 auto;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    gap: 30px;
    .navigation__link {
      transition: $transition;
      border-bottom: 2px solid transparent;
      width: max-content;
      font-weight: 600;
      letter-spacing: 2px;
      color: $secondary !important;
      padding: 0 10px;
      &:hover {
        padding-bottom: 5px;
        border-bottom-color: $secondary;
      }
    }
    .router-link-active {
      border-bottom-color: $secondary;
      padding: 0 10px 5px;
      letter-spacing: 4px;
    }
  }
  .hamburger__icon {
    color: $secondary;
    padding-right: 20px;
  }

  @media only screen and (max-width: 768px) {
    padding: 15px 20px;
    position: relative;
    .navigation__link {
      width: 100%;
    }
    .nav--mobile {
      background: $bgLight;
      border: 2px solid $secondary;
      border-radius: $radius;
      position: fixed;
      top: $headerHeight;
      left: 10px;
      right: 10px;
      z-index: 100;
      height: calc(100vh - $headerHeight + $bottomMargin);
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      .navigation__link {
        width: 100%;
        font-weight: 400;
        padding: 0 3px 5px;
        &:hover {
          border-bottom: 2px solid $secondary;
          letter-spacing: 4px;
        }
      }
      .router-link-active {
        font-weight: 700;
      }
    }
  }
}
</style>
