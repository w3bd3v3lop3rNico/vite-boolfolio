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
            <!-- <p v-if="project.technology">{{ project.technology.name }}</p> -->
        </div>
        <div class="card-body">
            <p class="card-text">
                {{ project.description }}
            </p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../style/general.scss" as *;

.card-content .card-header, .card-body{
    background-color: aqua;
    
}
</style>