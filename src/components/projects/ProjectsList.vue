<template>
  <BaseContainer class="projects-list__container">
    <BaseHeading element="h2" :text="data.title" margin="0 0 80px" :center="true" />

    <div class="projects-list">
      <ProjectItem 
        v-for="(project, index) in data.list" 
        :key="index" 
        :item="project"
        @view-more="open"
      />
    </div>

    <BasePopup :isVisible="popupVisible" type="blured" :heading="viewedItemHeading">
      <ProjectOverview :item="viewedItem" />
    </BasePopup>
    <BaseOverlay v-if="popupVisible" @close="close" />
  </BaseContainer>
</template>

<script>
import ProjectItem from './ProjectItem.vue'
import ProjectOverview from './ProjectOverview.vue'

export default {
    name: "ProjectsList",
    components: { ProjectItem, ProjectOverview },
    props: {
      data: { type: Object, default: () => {} }
    },
    data () {
        return {
            popupVisible: false,
            viewedItem: null,
            viewedItemHeading: null
        }
    },
    methods: {
      close () {
        this.popupVisible = false
      },
      open (item) {
        this.popupVisible = true
        this.viewedItem = item
        this.viewedItemHeading = this.viewedItem.title
        console.log(this.viewedItem)
      }
    }
}
</script>

<style lang="scss">
  .projects-list__container {

    .projects-list {
    }
  }
</style>