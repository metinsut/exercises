<template>
  <div class="animatedIcon">
    <v-header></v-header>
    <div class="wrapper">
      <div class="icons">
        <div id="nav-icon1" v-bind:class="{open:isActive}" v-on:click="run">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="icons">

      </div>
      <div class="icons">

      </div>
      <div class="icons">

      </div>
    </div>
  </div>
</template>

<script>
import header from '@/components/layout/header'
export default {
  name: 'animatedIcon',
  components: { 'v-header': header },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      isActive: false,
    }
  },
  methods: {
    run() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/common/common";

#nav-icon1 {
  width: 60px;
  height: 45px;
  position: relative;
  background-color: rgba(221, 109, 54, 1.0);
  margin: 50px auto;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  &.open span:nth-child(2) {
    width: 50%;
    left: 30px;
  }
  span {
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background-color: rgba(52, 73, 94, 1.0);
    border-radius: 9px;
    opacity: 1;
    left: 0px;
    transition: 0.25s ease-in-out;
    &:nth-child(1) {
      top: 0px;
    }
    &:nth-child(2) {
      top: 18px;
      width: 50%;
    }
    &:nth-child(3) {
      top: 36px;
    }
  }
}
</style>
