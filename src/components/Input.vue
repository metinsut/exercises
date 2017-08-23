<template>
  <div class="input">
    <v-header></v-header>
    <div class="wrapper">
      <div class="style1">
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
  .style1 {
    input {
      display: inline-block;
      color: rgba(52, 73, 94,1.0);
      height:50px;
      width: 300px;
      border: none;
      &:focus {
        outline: none;
      }
      &:focus:span {
        transform: scalex(1);
      }
    }
    span {
      display: block;
      content: '';
      border-bottom: 3px solid rgba(192, 57, 43,1.0);
      transform: scalex(0);
      transition: transform 500ms ease-in-out;
    }
  }
}
</style>
