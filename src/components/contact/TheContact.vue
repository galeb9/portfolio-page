<template>
  <BaseContainer class="contact__container">
    <BaseHeading :text="data.title" :center="true" margin="0 0 20px 0"/>
    <div class="contact__icon">

        <div class="contact__icon-plane">
            <img class="contact__icon-plane-img plane--dark" :src="require('@/assets/images/plane.png')" alt="Plane image">
        </div>

        <div class="contact__icon-hands">
            <img class="contact__icon-hands-img" :src="require('@/assets/images/hands-colored.png')" alt="Hands image">
        </div>

    </div>
    <a href="mailto:matej.grimsic@gmail.com">
        <BaseButton :text="data.btn" type="dark" aligment="center" />
    </a>
    <div class="contact__or-message">
        <BaseText :text="data.or" />
        <font-awesome-icon class="hamburger__icon" :icon="['fa', 'arrow-down-long']"/>

    </div>
    <a class="contact__copy-email" href="mailto:matej.grimsic@gmail.com">
        matej.grimsic@gmail.com
    </a>


  </BaseContainer>
</template>

<script>
export default {
    name: "TheContact",
    props: {
        data: { type: Object, default: () => {} }
    }
}
</script>

<style lang="scss">
    .contact__container {
        display: flex;
        flex-direction: column;
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
                border: 2px solid $secondary;
                border-radius: 50%;
                background: radial-gradient( $primary ,  transparent 120% ), url(https://grainy-gradients.vercel.app/noise.svg) !important;
                filter: contrast(100%) brightness(100%);
                .contact__icon-plane-img {
                    max-width: 50px
                }   
            }
            .contact__icon-hands {}
            
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
        }
    }
</style>