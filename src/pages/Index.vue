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
                    
                    this.projects = res.data.results.data
                    console.log(res.data.results.data)
                })
        }
    },
    created() {
        this.fetchProjData()
    }
}
</script>
<template>
    <div class="container title-box">
        <h1>I miei progetti</h1>
    </div>
    
    <div class="container">
        <div class="row">
            <ProjCard class="card project-card col-4" v-for="project in projects" :project="project" :key="project.id" />
        </div>
        
    </div>
</template>
<style lang="scss" scoped>
@use "../style/general.scss" as *;

.title-box {
    margin-bottom: 20px;
    text-align: center;
    color: red;
}
.project-card {
    padding: 0 10px;
    
}
</style>