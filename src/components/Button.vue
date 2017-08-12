<template lang="html">
  <div class="button">
    <v-header></v-header>
    <div class="wrapper">
      <div class="container">
        <div class="ripple-button">
          <button id="ripple" type="button" name="button">Ripple Button</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import header from '@/components/layout/header'
export default {
  name:'button',
  components: { 'v-header': header },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/common/common";

button {
      font-family : inherit;
      font-size: 1em;
  }

#ripple{
  width: 300px;
  height: 100px;
  background-color: rgba(142, 68, 173,1.0);
  cursor: pointer;
  font-size: 30px;
  border: none;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition-duration: 0.4s;
  position: relative;
  overflow: hidden;
  &:hover{
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    opacity: 0.9;
  }
  &:after {
    content: "";
    background: rgba(155, 89, 182,1.0);
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px!important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }
  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
  }
  &:focus{
    outline: 0;
  }
}
</style>
