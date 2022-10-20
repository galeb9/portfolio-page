<template>
  <BaseContainer class="contact__container">
    <BaseHeading :text="data.title" :center="true" margin="0 0 20px 0"/>
    <div class="contact__icon">

        <div :class="['contact__icon-plane', {'move__plane-icon' : movePlane}]">
            <img class="contact__icon-plane-img plane--dark" :src="require('@/assets/images/plane.png')" alt="Plane image">
        </div>

        <div class="contact__icon-hands">
            <img class="contact__icon-hands-img" :src="require('@/assets/images/hands-colored.png')" alt="Hands image">
        </div>

    </div>
    <a :href="'mailto:' + data.email">
        <BaseButton @click="openMailClient" :text="data.btn" type="dark" aligment="center"  />
    </a>
    <div class="contact__or-message">
        <BaseText :text="data.or" />
        <font-awesome-icon :icon="['fa', 'arrow-down-long']"/>

    </div>
    <div class="contact__copy-email" @click="copyText(data.email)">
        <p>{{ data.email }}</p>
        <font-awesome-icon class="copy-icon" :icon="['far', 'clone']"/>

    </div>
    <div class="copied-notification__container">
        <transition name="fade-in-from-bottom">
            <p v-show="isCopied" class="notification--copied">Email copied to clipboard</p>
        </transition>
    </div>
  </BaseContainer>
</template>

<script>
export default {
    name: "TheContact",
    props: {
        data: { type: Object, default: () => {} }
    },
    data () {
        return {
            isCopied: false,
            movePlane: false,
        }
    },
    methods: {
        openMailClient() {
            this.movePlane = true;
        },
        async copyText (text) {
            this.isCopied = true
            this.movePlane = true
            setTimeout(() => this.isCopied = false, 4000)
            return await navigator.clipboard.writeText(text)
        }
    }
}
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
            // border: 2px solid black;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-bottom: 30px;
            .contact__icon-plane {
                padding: 20px;
                background: $secondary;
                width: max-content;
                transform: translateY(30px);
                border: 2px solid $blue;
                border-radius: 50%;
                background: radial-gradient( $primary ,  transparent 120% ), url(https://grainy-gradients.vercel.app/noise.svg) !important;
                filter: contrast(100%) brightness(100%);

                .contact__icon-plane-img {
                    max-width: 50px
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
                // text-shadow:
                //     0 0 7px $secondary,
                //     0 0 10px $secondary,
                //     0 0 21px $secondary;
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