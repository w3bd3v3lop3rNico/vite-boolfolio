<script>
export default {
  data() {
    return {
      creator: 'Nicola',
      job: 'Full Stack Web Developer'
    }
  },
  mounted() {
    console.log('home page montata')
  },
  unmounted() {
    console.log('home page smontata')
  }
}
</script>
<template>
    <h1>{{ creator }}</h1>
    <h3>{{ job }}</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit cupiditate saepe nesciunt omnis rem ipsam ipsa totam quia. Dolor!</p>
</template>
<style lang="scss" scoped>

</style>