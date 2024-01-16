<script>
import axios from 'axios'
export default {
  props: {
    slug: String
  },
  data() {
    return {
      project: null,
      url: 'http://127.0.0.1:8000/api'
    }
  },
  methods: {
    fetchProject() {
      // axios.get(`${this.url}/projects/${this.$route.params.slug}`)
      axios.get(`${this.url}/projects/${this.slug}`)
      .then(res => {
        // console.log(res.data.project)
        this.project = res.data.project
      })

        
      
    }
  },
  created() {
    this.fetchProject()
  }
}
</script>
<template>
   <div v-if="project">
    <div class="container">
      <h1>{{  project.title }}</h1>
      <p>{{ project.slug }}</p>
      <!-- <p >{{ project.category?.name }}</p> -->
      <ul class="technologies">
        <li v-for="technology in project.technologies" :key="technology.id">
          {{ technology.name }}
        </li>
      </ul>
    </div>

    <div class="container" v-html="project.content">
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>