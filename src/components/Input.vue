<template>
  <div class="input">
    <v-header></v-header>
    <div class="wrapper">
      <div class="mtn">
        <input class="effect" type="text" placeholder="Placeholder Text">
        <span class="focus-border"></span>
        <span class="focus-border1"></span>
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

<style lang="scss" scoped>

@import "../assets/common/common";

.mtn {
  float: left;
  width: 50%;
  margin: 40px 3%;
  position: relative;
}

input[type="text"] {
  font: 15px/24px "Lato", Arial, sans-serif;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
}

:focus {
  outline: none;
}

.effect {
  border: 0;
  padding: 7px 0;
}

.effect~.focus-border {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #3399FF;
  transition: .5s;
}

.effect:focus~.focus-border {
  width: 100%;
  transition: .5s;
  left: 0;
}
</style>
