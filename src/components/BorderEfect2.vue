<template>
  <div class="borderEfect">
    <v-header></v-header>
    <div class="wrapper">
      <div class="hover1">
        <ul>
          <li>Home</li>
          <!-- <li>About</li>
          <li>Contact</li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import header from '@/components/layout/header'
export default {
  name: 'borderEfect',
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

.hover1 {
  display: flex;
  height: 200px;
  background-color: white;
  justify-content: center;
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    background-color: blue;
    li {
      display: inline-block;
      // display: flex;
      // align-items: center;
      padding: 0 30px;
      background-color: rgba(26, 188, 156,1.0);
      &:after {
        display: block;
        content: '';
        border-bottom: 3px solid rgba(192, 57, 43,1.0);
        transform: scalex(0);
        transition: transform 500ms ease-in-out;
      }
      &:hover:after {
        transform: scalex(1);
      }
    }
  }
}

</style>
