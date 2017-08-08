<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
body,html{
  margin: 0;
  padding: 0;
  background-color: white;
  @font-face {
	font-family: "roboto";
	src: url("assets/fonts/Roboto-Medium.ttf") format("truetype")
  }
  font-family: roboto;
}
hr{
  width: 100%;
  height: 5px;
  color: rgba(192, 57, 43,1.0);
  background-color: rgba(192, 57, 43,1.0);
}
</style>
