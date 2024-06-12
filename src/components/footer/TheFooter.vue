<template>
  <div class="footer border-top">
    <BaseLogo />
    <BaseSocialIcons :links="data.links" />
  </div>
</template>

<script>
import BaseSocialIcons from "@/components/UI/BaseSocialIcons.vue";
import BaseLogo from "@/components/UI/BaseLogo.vue";

export default {
  name: "TheFooter",
  components: { BaseSocialIcons, BaseLogo },
  props: {
    data: { type: Object, default: () => {} },
  },
};
</script>

<style lang="scss">
.footer {
  min-height: 10vh;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
}
</style>
