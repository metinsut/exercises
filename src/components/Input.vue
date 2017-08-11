<template>
  <div class="input">
    <v-header></v-header>
    <div class="wrapper">
      <div class="area">
        <input type="text" name="" value="">
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import header from '@/components/layout/header'
export default {
  name: 'input',
  components: {'v-header':header},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/common/common";

.wrapper {
  height: 300px;
  .area {
    input {
      display: inline-block;
      height: 30px;
      border: none;
      &:after {
        display: block;
        content: 'sadasd';
        border-bottom: 3px solid rgba(192, 57, 43,1.0);
        transform: scale(1);
      }
    }

  }
}
</style>
