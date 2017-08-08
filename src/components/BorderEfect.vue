<template>
  <div class="borderEfect">
    <v-header></v-header>
    <div class="wrapper">
      <div class="buttonHover">
        <div class="underlineEfect">
          <a href="#">Underline Hover Efect</a>
        </div>
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

.buttonHover {
  display: flex;
  align-items: center;
  justify-content: center;
  .underlineEfect {
    a {
      position: relative;
      color: #000;
      text-decoration: none;
      &:hover {
        color: grey;
        &:hover:before {
          visibility: visible;
          -webkit-transform: scaleX(1);
          transform: scaleX(1);
        }
      }
      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #000;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;
      }
    }
  }
}
</style>
