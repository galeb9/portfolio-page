<template>
    <div :class="['base-heading', animation]">
        <component :is="element">{{ text }}</component>
    </div>
</template>

<script>
export default {
    name: "BaseHeading",
    props: {
        element: { type: String, default: "h2"},
        text: { type: String, default: "Some text"},
        animation: { type: String, default: ""}
    }

}
</script>

<style lang="scss">
    .base-heading {
        margin-bottom: 14px;
        h1,h2 { 
            letter-spacing: 0.15em;
            white-space: nowrap; /* Keeps the content on a single line */
        }
        h1 { font-size: 50px }
        h2 { font-size: 40px }
        //mobile

    }
   
    .typewriter h1,
    .typewriter h2,
    .typewriter h3,
    .typewriter h4,
    .typewriter h5 {
        max-width: max-content;
        font-family: monospace;
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        border-right: .1em solid $secondary; /* The typwriter cursor */
        animation: typing 3.5s steps(30, end);
    }
    
    /* The typing effect */
    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    @media only screen and (max-width: 768px) {
        .base-heading {
            h1 {
                font-size: 30px;
            }
            h2 {
                font-size: 24px;
            }
        }
        .typewriter h1,
        .typewriter h2,
        .typewriter h3,
        .typewriter h4,
        .typewriter h5 { 
            margin: 0 auto;
        }
    }
    @media only screen and (max-width: 350px) {
        .base-heading h1{
            font-size: 26px ;
        }
    }

</style>