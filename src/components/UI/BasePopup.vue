<template>
    <transition name="fade-in-from-bottom"> 
        <div v-if="isVisible" :class="['base-popup', 'popup--' + type]">
            <BaseHeading :text="heading" margin="18px 0 10px" element="h3" :center="true" />
            <div :class="['base-popup__body', align]">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "BasePopup",
    props: {
        heading: { type: String, default: "Title"},
        isVisible: { type: Boolean, default: false},
        align: { type: String, default: ""},
        type: { type: String, default: ""},
    },
}
</script>

<style lang="scss">
    
    .base-popup{
        width: 80%;
        max-height: 70vh;
        margin: 15vh auto;
        max-width: 800px;
        position: fixed;
        z-index: 101;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        color: white;
        display: flex;
        flex-direction: column;
        border-radius: 18px;
        .base-popup__body {
            height: 100%;
            overflow-y: auto;
            margin: 0 15px 30px 0px;
            padding: 30px 50px;
        }
  
        @media only screen and (max-width: 768px) {
            width: 100%;
            max-height: 85vh;
            margin: 15vh auto 0;
            border-radius: 18px 18px 0 0;
            bottom: -10px;
            .base-popup__body {
                padding: 12px 30px 30px;
                margin: 0 0 30px 0;
            }
        }

        // aligment of body items
        .center {
            text-align: center;
        }
    }
    // type of popup
    .popup--blured {
        background: rgba($color: black, $alpha: 0.54);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(9px);
        -webkit-backdrop-filter: blur(9px);
        margin-bottom: 10px;
        color: $lightText;
        box-shadow: $shadow2;
    }
</style>