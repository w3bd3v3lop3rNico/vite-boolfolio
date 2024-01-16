<script>
import axios from 'axios';
import ProjCard from '../components/ProjCard.vue'

export default {
    components: {
        ProjCard,
    },
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
                    this.projects = res.data.results
                })
        }
    },
    created() {
        this.fetchProjData()
    }
}
</script>
<template>
    <div class="container">
        <ProjCard class="card prject-card" v-for="project in projects" :project="project" :key="project.id" />
    </div>
</template>
<style>
</style>