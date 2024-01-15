<script>
import axios from 'axios';

export default {
  data() {
    return {
      projects: [],
      url: 'http://127.0.0.1:8000/api'
    }
  },
  methods: {
    fetchProjData() {
      axios.get(`${this.url}/projects`)
      .then((res) => {
        console.log(res)
        // this.projects = res.data.results.data
      })
    }
  },
  created() {
    this. fetchProjData()
  }
}
</script>
<template>

</template>
<style>
</style>