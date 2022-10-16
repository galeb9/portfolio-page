<template>
  <p class="base-text">
    <slot>
        {{ text }}
    </slot>
  </p>
</template>

<script>
export default {
    name: "BaseText",
    props: {
        text: { type: String, default: ""}
    }

}
</script>

<style lang="scss">
	.base-text {


		@media only screen and (max-width: 768px) { 
			font-size: 14px;
		}

	}
</style>