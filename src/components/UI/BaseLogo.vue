<template>
  <div class="base-logo" @click="$router.push('/')">
    <img src="@/assets/images/logo-colored.png" alt="Portfolio page logo" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.base-logo {
  cursor: pointer;
  transition: transform 0.4s ease-in-out 0.2s;

  & > img {
    max-height: 30px;
    @media only screen and (max-width: 768px) {
      max-height: 24px;
    }
  }
  &:hover {
    transform: rotate(360deg);
  }
}
</style>
