<template>
  <div class="borderEfect">
    <v-header></v-header>
    <div class="wrapper">
      <div class="buttonHover">
        <div class="underlineEfect">
          <a href="#">Underline Hover Efect</a>
        </div>
      </div>
      <div class="hovertransform">
        <div class="style1">
          <h1>UNDERLINE EFECT</h1>
        </div>
      </div>
      <div class="hoverperfect">
        <ul>
          <li class="isActive">Home</li>
          <li><a href="#">About</a></li>
          <li>Contact</li>
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
.hovertransform {
  .style1 {
    h1 {
      display: inline-block;
      color: rgba(52, 73, 94,1.0);
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
.hoverperfect {
  display: flex;
  height: 200px;
  background-color: white;
  justify-content: center;
  ul {
    list-style-type: none;
    display: flex;
    align-items: stretch;
    .isActive {
      border-bottom: 5px solid rgba(241, 196, 15,1.0);
    }
    li {
      display: flex;
      align-items: center;
      padding: 0 30px;
      background-color: rgba(26, 188, 156,1.0);
      border-bottom: 5px solid rgba(192, 57, 43,1.0);
      &:hover {
        border-bottom: 5px solid rgba(241, 196, 15,1.0);
        transition: 1s ease-in-out;
      }
    }
  }
}
</style>
