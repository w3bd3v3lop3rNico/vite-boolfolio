<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>
<template>
    <div class="card-content">
        <div class="card-header ">
            <h4>{{ project.title }}</h4>
           
        </div>
        <div class="card-body">
            <p class="card-text">
                <router-link :to="{ name: 'projects.show', params: { slug: project.slug }}" >Leggi articolo...</router-link>
            </p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../style/general.scss" as *;

.card-content .card-header, .card-body{
    background-color: aqua;

    .card-text{
        color: red;
    }
    
}

</style>