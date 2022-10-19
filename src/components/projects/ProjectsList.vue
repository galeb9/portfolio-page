<template>
  <BaseContainer class="projects-list__container">
    <BaseHeading element="h2" :text="data.title" margin="0" :center="true" />

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
      }
    }
}
</script>

<style lang="scss">
  .projects-list__container {
    .projects-list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 80px;
      margin-top: 100px;

    }
    @media only screen and (max-width: 768px) {
      margin: 80px 0;
    padding-bottom: 50px;

      .projects-list {
        margin-top: 50px;
      }
    }
  }
</style>