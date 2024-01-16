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
        <h4>{{ project.title }}</h4>
    </div>

</template>
<style lang="scss" scoped>
</style>