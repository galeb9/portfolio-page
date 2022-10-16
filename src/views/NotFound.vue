<template>
  <BaseContainer class="not-found__page">
        <img class="not-found__svg" :src="require('@/assets/svg/404.svg')" alt="">
        <router-link to="">Go to home page</router-link>

  </BaseContainer>
</template>

<script>
export default {
    name: "NotFound"
}
</script>

<style lang="scss">
.not-found__page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 100vh;
    .not-found__svg {
        width: 50%;
        text-align: center;
        max-width: 500px;
        margin-bottom: 13px;
    }  
}
</style>