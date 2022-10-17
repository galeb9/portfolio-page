<template>
	<div class="main">
		<TheHeader />
		<RouterView class="router-view" v-slot="{ Component }">
			<transition name="fade-in" mode="out-in">
					<component class="active-component" :is="Component" />
			</transition>
		</RouterView>

		<div class="light-mode__container non-select" @click="toggleLightMode">
			<font-awesome-icon class="light-mode__icon" :icon="['fa', 'circle-half-stroke']"/>
		</div>
		<TheFooter />
	</div>


</template>

<script>
import TheHeader  from "@/components/header/TheHeader.vue"
import TheFooter  from "@/components/footer/TheFooter.vue"

export default {
  name: 'App',
  components: {
    TheHeader,
	TheFooter
  },
  data () {
	return {
		isLight: false
	}
  },
  methods: {
	toggleLightMode () {
		const app = document.querySelector("#app")
		app.classList.contains("light-mode") ? app.classList.remove("light-mode") : ''
		if(this.isLight) {
			app.classList.remove("light-mode")
		} else {
			app.classList.add("light-mode")
		}
		this.isLight = !this.isLight
	}
  }
}
</script>

<style lang="scss">
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
// scrollbar 
::-webkit-scrollbar {
	width: 10px;
	height: 8px;
	background: $bgDark;
	border-radius: 10px ;
}
::-webkit-scrollbar-track {
	border-radius: 10px;
}
::-webkit-scrollbar-thumb {
	background: rgba(59, 206, 172, 0.678); 
	border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
	background: rgba(59, 206, 172, 0.808); ; 
}

.non-select {
	-webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Old versions of Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none;
}
#app.light-mode {
	transition: all .2s ease-in;
	background: $bgLight ;
	color: black ;
	.light-mode__icon {
		color: black ; 
		transition: $transition;
	}
	.skill-item__pointer {
		.skill-item__pointer-text {
			color: $text;
		}
		.skill-item__pointer-line {
			background: rgba(5, 5, 5, 0.521);
		}
	}
	::-webkit-scrollbar {
		background: $bgLight;
	}
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background: $bgDark;
	color: $lightText;
	height: 100%;

	// temp: 
	// overflow-x: hidden;
	a:link,
	a:visited {
		text-decoration: none;
		border-bottom: none;
		color: inherit;
	}
	.main {
		max-width: 1280px;
		min-height: 100vh;
		padding: 0 40px;
		margin: 0 auto;
		.router-link-active {
			transition: all 0.2s ease-out;
			border-bottom: 2px solid $secondary;
			padding: 0 3px 5px;
		}
		.display-on-desktop { display: block }
		.display-on-mobile { display: none }
		.light-mode__container {
			position: fixed;
			bottom: 20px;
			right: 20px;
			z-index: 11 ;
			cursor: pointer;
			.light-mode__icon {
				font-size: 36px;
				color: $secondary;
			}
		}
		.noisy {
			width: 100%;
			height: 100%;
			background: radial-gradient( coral ,  transparent 120% ), url(https://grainy-gradients.vercel.app/noise.svg);
			// background: transparent url(https://grainy-gradients.vercel.app/noise.svg);
			filter: contrast(100%) brightness(100%);
		}
		@media only screen and (max-width: 768px) {
			padding: 0 20px; // app padding at sides

			.display-on-desktop { display: none }
			.display-on-mobile { display: block }
		}


	}

	// device sizes -> text, side padding
}
</style>
