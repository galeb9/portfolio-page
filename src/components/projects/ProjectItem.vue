<template>
  <div class="project-item">

    <div 
        class="project-item__main" 
        @mouseenter="addClassToViewMore" 
        @mouseleave="removeClassFromViewMore"
        @click="$emit('viewMore', item)"
    >
        <img class="project-item__img" :src="require('@/assets/images/' + item.img )" alt="Project image">
        <div class="project-item__main-info glass-bg">
            <BaseHeading element="h3" :text="item.title" margin="10px 0" />
            <BaseText :text="item.text" />
        </div>
    </div>

    <div v-if="item.tech.length" class="project-item__tech glass-bg">
        <span 
            class="project-item__tech-item"
            v-for="(el, index) in item.tech"
            :key="index"
        >{{ '#' + el }}</span>
    </div>

    <div v-if="linksVisible" class="project-item__links-container glass-bg">
        <div class="project-item__links">
            <a v-if="item.github" :href="item.github" target="_blank" class="project-item__links-item">
                <font-awesome-icon class="project-link__icon" :icon="['fab', 'github']" />
            </a>
            <a v-if="item.liveAt" :href="item.liveAt" target="_blank" class="project-item__links-item">
                <font-awesome-icon class="project-link__icon" :icon="['fa', 'eye']" />
            </a>
        </div>
        <span v-if="item.description" @click="$emit('viewMore', item)" class="project-item__links-item open-popup__btn" ref="openPopup">
           View more <font-awesome-icon class="project-link__icon" :icon="['fa', 'arrow-right-long']" />
        </span>
    </div>
  </div>
</template>

<script>
export default {
    name: "ProjectItem",
    props: {
        item: { type: Object, default: () => {} },
    },
    computed: {
        linksVisible () {
            return this.item.github || this.item.liveAt || this.item.description
        }
    },
    methods: {
        addClassToViewMore () {
            const viewMore = this.$refs.openPopup
            viewMore.classList.add("view-more__color")
        },
        removeClassFromViewMore () {
            const viewMore = this.$refs.openPopup
            viewMore.classList.remove("view-more__color")
        }
    }
}
</script>

<style lang="scss">
    .project-item {
        max-width: 350px;
        .glass-bg {
            background: rgba($color: black, $alpha: 0.54);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(9px);
            -webkit-backdrop-filter: blur(9px);
            margin-bottom: 10px;
            color: $lightText;
            box-shadow: $shadow2;
        }

        .project-item__main {
            position: relative;
            margin-bottom: 8px;
            transition: $transition;
            cursor: pointer;
            &:hover .open-popup__btn .project-link__icon {
                color: $secondary;
            }
            .project-item__img {
                width: 100%;
                border-radius: $radius ;
            }
            .project-item__main-info {
                border-radius: 0 0 $radius $radius ;
                width: 100%;
                position: absolute;
                min-height: 140px;
                bottom: -10px;
                left: 0;
                right: 0;
                padding: 10px 20px 30px;
                color: white;
                transition: $transition;
            }
        }
    
        .project-item__tech {
            padding: 10px 16px;
            border-radius: $radius $radius;
            font-size: 14px;
            .project-item__tech-item {
                opacity: 0.7;
                transition: $transition;
                &:hover {
                    opacity: 1;
                }
            }
            .project-item__tech-item + .project-item__tech-item {
                margin-left: 8px;
            }
        }

        .project-item__links-container {
            padding: 10px 16px;
            border-radius: $radius $radius;
            display: flex;
            .open-popup__btn {
                margin-left: auto;
                display: flex;
                gap: 8px;
                transition: $transition;
                &:hover {
                    color: $secondary;
                    .project-link__icon {
                        color: $secondary;
                    }
                }
            }
            
            .project-item__links-item{
                cursor: pointer;
                .project-link__icon {
                    font-size: 20px;
                    transition: $transition;
                    &:hover {
                        color: $secondary;
                    }
                }
            }
            .project-item__links-item+ .project-item__links-item{
                margin-left: 16px;
            }
        }
        .view-more__color {
            color: $secondary !important;
        }
    }
</style>