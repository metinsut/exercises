<template>
  <div class="home">
    <v-header></v-header>
    <h1>HOME</h1>
  </div>
</template>

<script>
import header from '@/components/layout/header'
export default {
  name: 'home',
  components: {'v-header':header},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/common/common";
</style>
